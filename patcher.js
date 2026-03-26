/**
 * patcher.js — Disk-based patcher for OpenClaw dist files
 * Removes all hardcoded limits and security gates.
 * Author: DEEP-IOS
 *
 * Design:
 * - Auto-discovers dist files by prefix (no hardcoded hashes)
 * - String match first, regex fallback
 * - All patches marked optional so version diffs don't crash
 * - Backup originals for unpatch
 *
 * Calibrated against v3.24 dist layout.
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, copyFileSync, unlinkSync } from "node:fs";
import { join, basename } from "node:path";

// ─── File Discovery ──────────────────────────────────────────────

/**
 * Resolve a dist file by prefix. Returns absolute path or null.
 * Matches: prefix-*.js, prefix.*.js, prefix*.js
 */
function resolveDistFile(distDir, prefix) {
  if (!existsSync(distDir)) return null;
  const files = readdirSync(distDir);
  // Try exact match first
  const exact = files.find((f) => f === prefix + ".js");
  if (exact) return join(distDir, exact);
  // Then prefix-hash pattern
  const match = files.find(
    (f) =>
      f.startsWith(prefix + "-") && f.endsWith(".js") ||
      f.startsWith(prefix + ".") && f.endsWith(".js") && f !== prefix + ".json"
  );
  return match ? join(distDir, match) : null;
}

/**
 * Resolve ALL dist files matching a prefix. Returns array of absolute paths.
 */
function resolveAllDistFilesForPrefix(distDir, prefix) {
  if (!existsSync(distDir)) return [];
  const files = readdirSync(distDir);
  return files
    .filter((f) =>
      (f === prefix + ".js") ||
      (f.startsWith(prefix + "-") && f.endsWith(".js")) ||
      (f.startsWith(prefix + ".") && f.endsWith(".js") && f !== prefix + ".json")
    )
    .map((f) => join(distDir, f));
}

/**
 * Find all dist files matching any of the given prefixes.
 */
function resolveAllDistFiles(distDir, prefixes) {
  const found = {};
  for (const prefix of prefixes) {
    const path = resolveDistFile(distDir, prefix);
    if (path) found[prefix] = path;
  }
  return found;
}

// ─── Backup / Restore ────────────────────────────────────────────

function backupPath(filePath) {
  return filePath + ".bak.original";
}

function backupFile(filePath) {
  const bak = backupPath(filePath);
  if (!existsSync(bak)) {
    copyFileSync(filePath, bak);
    return true;
  }
  return false; // already backed up
}

function restoreFile(filePath) {
  const bak = backupPath(filePath);
  if (existsSync(bak)) {
    copyFileSync(bak, filePath);
    unlinkSync(bak);
    return true;
  }
  return false;
}

// ─── Patch Engine ────────────────────────────────────────────────

/**
 * Apply a single string/regex replacement.
 * Returns { applied, before, after } or { applied: false, reason }
 */
function applyOnePatch(content, patch) {
  // Try string match first
  if (patch.find && typeof patch.find === "string") {
    if (content.includes(patch.find)) {
      const newContent = content.replace(patch.find, patch.replace);
      return { applied: true, before: patch.find, after: patch.replace, content: newContent };
    }
  }

  // Regex fallback
  if (patch.regex) {
    const rx = patch.regex instanceof RegExp ? patch.regex : new RegExp(patch.regex, patch.regexFlags || "g");
    if (rx.test(content)) {
      // Reset lastIndex for global regex
      rx.lastIndex = 0;
      const newContent = content.replace(rx, patch.replace);
      return { applied: true, before: rx.source, after: patch.replace, content: newContent };
    }
  }

  return { applied: false, reason: "pattern not found" };
}

/**
 * Apply multiple patches to file content.
 */
function applyPatches(content, patches, { verbose = false } = {}) {
  const results = [];
  let current = content;

  for (const patch of patches) {
    const result = applyOnePatch(current, patch);
    if (result.applied) {
      current = result.content;
      results.push({
        name: patch.name,
        applied: true,
        before: result.before,
        after: result.after,
        optional: patch.optional ?? true,
      });
    } else {
      results.push({
        name: patch.name,
        applied: false,
        reason: result.reason,
        optional: patch.optional ?? true,
      });
    }
  }

  return { content: current, results };
}

// ─── Patch Definitions ───────────────────────────────────────────

/**
 * TIER 1: Hardcoded Limits — pi-embedded-*.js
 * v3.24 format: "const NAME = value" (spaces around =)
 */
const PI_EMBEDDED_PATCHES = [
  // Retry & turn limits
  { name: "MAX_RUN_RETRY_ITERATIONS", find: "const MAX_RUN_RETRY_ITERATIONS = 160", replace: "const MAX_RUN_RETRY_ITERATIONS = 2000", optional: true },
  { name: "MAX_RUN_RETRY_ITERATIONS (alt)", regex: /const MAX_RUN_RETRY_ITERATIONS\s*=\s*160\b/, replace: "const MAX_RUN_RETRY_ITERATIONS = 2000", optional: true },
  { name: "MAX_PING_PONG_TURNS", find: "const MAX_PING_PONG_TURNS = 5", replace: "const MAX_PING_PONG_TURNS = 200", optional: true },
  { name: "MAX_PING_PONG_TURNS (alt)", regex: /const MAX_PING_PONG_TURNS\s*=\s*5\b/, replace: "const MAX_PING_PONG_TURNS = 200", optional: true },
  { name: "DEFAULT_PING_PONG_TURNS", find: "const DEFAULT_PING_PONG_TURNS = 5", replace: "const DEFAULT_PING_PONG_TURNS = 200", optional: true },
  { name: "DEFAULT_PING_PONG_TURNS (alt)", regex: /const DEFAULT_PING_PONG_TURNS\s*=\s*5\b/, replace: "const DEFAULT_PING_PONG_TURNS = 200", optional: true },

  // Context window & token limits
  { name: "DEFAULT_CONTEXT_WINDOW", find: "const DEFAULT_CONTEXT_WINDOW = 32e3", replace: "const DEFAULT_CONTEXT_WINDOW = 200000", optional: true },
  { name: "DEFAULT_CONTEXT_WINDOW (alt)", regex: /const DEFAULT_CONTEXT_WINDOW\s*=\s*32e3\b/, replace: "const DEFAULT_CONTEXT_WINDOW = 200000", optional: true },
  { name: "DEFAULT_MAX_TOKENS", find: "const DEFAULT_MAX_TOKENS = 4096", replace: "const DEFAULT_MAX_TOKENS = 16384", optional: true },
  { name: "DEFAULT_MAX_TOKENS (alt)", regex: /const DEFAULT_MAX_TOKENS\s*=\s*4096\b/, replace: "const DEFAULT_MAX_TOKENS = 16384", optional: true },

  // Tool result limits
  { name: "HARD_MAX_TOOL_RESULT_CHARS", find: "const HARD_MAX_TOOL_RESULT_CHARS = 4e5", replace: "const HARD_MAX_TOOL_RESULT_CHARS = 2e6", optional: true },
  { name: "HARD_MAX_TOOL_RESULT_CHARS (alt)", regex: /const HARD_MAX_TOOL_RESULT_CHARS\s*=\s*4e5\b/, replace: "const HARD_MAX_TOOL_RESULT_CHARS = 2e6", optional: true },

  // Observation & compaction
  { name: "MAX_OBSERVATION_INPUT_CHARS", find: "const MAX_OBSERVATION_INPUT_CHARS = 64e3", replace: "const MAX_OBSERVATION_INPUT_CHARS = 256e3", optional: true },
  { name: "MAX_OBSERVATION_INPUT_CHARS (alt)", regex: /const MAX_OBSERVATION_INPUT_CHARS\s*=\s*64e3\b/, replace: "const MAX_OBSERVATION_INPUT_CHARS = 256e3", optional: true },
  { name: "MAX_COMPACTION_SUMMARY_CHARS", find: "const MAX_COMPACTION_SUMMARY_CHARS = 16e3", replace: "const MAX_COMPACTION_SUMMARY_CHARS = 64e3", optional: true },
  { name: "MAX_COMPACTION_SUMMARY_CHARS (alt)", regex: /const MAX_COMPACTION_SUMMARY_CHARS\s*=\s*16e3\b/, replace: "const MAX_COMPACTION_SUMMARY_CHARS = 64e3", optional: true },
  { name: "MAX_OVERFLOW_COMPACTION_ATTEMPTS", find: "const MAX_OVERFLOW_COMPACTION_ATTEMPTS = 3", replace: "const MAX_OVERFLOW_COMPACTION_ATTEMPTS = 10", optional: true },
  { name: "MAX_OVERFLOW_COMPACTION_ATTEMPTS (alt)", regex: /const MAX_OVERFLOW_COMPACTION_ATTEMPTS\s*=\s*3\b/, replace: "const MAX_OVERFLOW_COMPACTION_ATTEMPTS = 10", optional: true },

  // Turn preservation
  { name: "MAX_RECENT_TURNS_PRESERVE", find: "const MAX_RECENT_TURNS_PRESERVE = 12", replace: "const MAX_RECENT_TURNS_PRESERVE = 48", optional: true },
  { name: "MAX_RECENT_TURNS_PRESERVE (alt)", regex: /const MAX_RECENT_TURNS_PRESERVE\s*=\s*12\b/, replace: "const MAX_RECENT_TURNS_PRESERVE = 48", optional: true },
  { name: "DEFAULT_RECENT_TURNS_PRESERVE", find: "const DEFAULT_RECENT_TURNS_PRESERVE = 3", replace: "const DEFAULT_RECENT_TURNS_PRESERVE = 8", optional: true },
  { name: "DEFAULT_RECENT_TURNS_PRESERVE (alt)", regex: /const DEFAULT_RECENT_TURNS_PRESERVE\s*=\s*3\b/, replace: "const DEFAULT_RECENT_TURNS_PRESERVE = 8", optional: true },

  // Bootstrap & read limits
  { name: "DEFAULT_BOOTSTRAP_MAX_CHARS", find: "const DEFAULT_BOOTSTRAP_MAX_CHARS = 2e4", replace: "const DEFAULT_BOOTSTRAP_MAX_CHARS = 2e5", optional: true },
  { name: "DEFAULT_BOOTSTRAP_MAX_CHARS (alt)", regex: /const DEFAULT_BOOTSTRAP_MAX_CHARS\s*=\s*2e4\b/, replace: "const DEFAULT_BOOTSTRAP_MAX_CHARS = 2e5", optional: true },
  { name: "DEFAULT_READ_PAGE_MAX_BYTES", find: "const DEFAULT_READ_PAGE_MAX_BYTES = 50 * 1024", replace: "const DEFAULT_READ_PAGE_MAX_BYTES = 512 * 1024", optional: true },
  { name: "DEFAULT_READ_PAGE_MAX_BYTES (alt)", regex: /const DEFAULT_READ_PAGE_MAX_BYTES\s*=\s*50\s*\*\s*1024/, replace: "const DEFAULT_READ_PAGE_MAX_BYTES = 512 * 1024", optional: true },
  { name: "MAX_ADAPTIVE_READ_MAX_BYTES", find: "const MAX_ADAPTIVE_READ_MAX_BYTES = 512 * 1024", replace: "const MAX_ADAPTIVE_READ_MAX_BYTES = 2 * 1024 * 1024", optional: true },
  { name: "MAX_ADAPTIVE_READ_MAX_BYTES (alt)", regex: /const MAX_ADAPTIVE_READ_MAX_BYTES\s*=\s*512\s*\*\s*1024/, replace: "const MAX_ADAPTIVE_READ_MAX_BYTES = 2 * 1024 * 1024", optional: true },
  { name: "MAX_ADAPTIVE_READ_PAGES", find: "const MAX_ADAPTIVE_READ_PAGES = 8", replace: "const MAX_ADAPTIVE_READ_PAGES = 64", optional: true },
  { name: "MAX_ADAPTIVE_READ_PAGES (alt)", regex: /const MAX_ADAPTIVE_READ_PAGES\s*=\s*8\b/, replace: "const MAX_ADAPTIVE_READ_PAGES = 64", optional: true },

  // Job TTL (v3.24: "= 1800 * 1e3")
  { name: "MAX_JOB_TTL_MS", find: "const MAX_JOB_TTL_MS = 10800 * 1e3", replace: "const MAX_JOB_TTL_MS = 86400 * 1e3", optional: true },
  { name: "MAX_JOB_TTL_MS (alt)", regex: /const MAX_JOB_TTL_MS\s*=\s*10800\s*\*\s*1e3/, replace: "const MAX_JOB_TTL_MS = 86400 * 1e3", optional: true },
  { name: "DEFAULT_JOB_TTL_MS", find: "const DEFAULT_JOB_TTL_MS = 1800 * 1e3", replace: "const DEFAULT_JOB_TTL_MS = 7200 * 1e3", optional: true },
  { name: "DEFAULT_JOB_TTL_MS (alt)", regex: /const DEFAULT_JOB_TTL_MS\s*=\s*1800\s*\*\s*1e3/, replace: "const DEFAULT_JOB_TTL_MS = 7200 * 1e3", optional: true },

  // Subagent & spawn
  { name: "DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS", find: "const DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS = 9e4", replace: "const DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS = 6e5", optional: true },
  { name: "DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS (alt)", regex: /const DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS\s*=\s*9e4\b/, replace: "const DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS = 6e5", optional: true },
  { name: "MAX_ANNOUNCE_RETRY_COUNT", find: "const MAX_ANNOUNCE_RETRY_COUNT = 3", replace: "const MAX_ANNOUNCE_RETRY_COUNT = 20", optional: true },
  { name: "MAX_ANNOUNCE_RETRY_COUNT (alt)", regex: /const MAX_ANNOUNCE_RETRY_COUNT\s*=\s*3\b/, replace: "const MAX_ANNOUNCE_RETRY_COUNT = 20", optional: true },

  // Search & queue
  { name: "DEFAULT_SEARCH_COUNT", find: "const DEFAULT_SEARCH_COUNT = 5", replace: "const DEFAULT_SEARCH_COUNT = 15", optional: true },
  { name: "DEFAULT_SEARCH_COUNT (alt)", regex: /const DEFAULT_SEARCH_COUNT\s*=\s*5\b/, replace: "const DEFAULT_SEARCH_COUNT = 15", optional: true },
  { name: "DEFAULT_QUEUE_CAP", find: "const DEFAULT_QUEUE_CAP = 20", replace: "const DEFAULT_QUEUE_CAP = 100", optional: true },
  { name: "DEFAULT_QUEUE_CAP (alt)", regex: /const DEFAULT_QUEUE_CAP\s*=\s*20\b/, replace: "const DEFAULT_QUEUE_CAP = 100", optional: true },

  // Frozen / session bytes (v3.24: "= 100 * 1024")
  { name: "FROZEN_RESULT_TEXT_MAX_BYTES", find: "const FROZEN_RESULT_TEXT_MAX_BYTES = 100 * 1024", replace: "const FROZEN_RESULT_TEXT_MAX_BYTES = 512 * 1024", optional: true },
  { name: "FROZEN_RESULT_TEXT_MAX_BYTES (alt)", regex: /const FROZEN_RESULT_TEXT_MAX_BYTES\s*=\s*100\s*\*\s*1024/, replace: "const FROZEN_RESULT_TEXT_MAX_BYTES = 512 * 1024", optional: true },
  { name: "SESSIONS_HISTORY_MAX_BYTES", find: "const SESSIONS_HISTORY_MAX_BYTES = 80 * 1024", replace: "const SESSIONS_HISTORY_MAX_BYTES = 512 * 1024", optional: true },
  { name: "SESSIONS_HISTORY_MAX_BYTES (alt)", regex: /const SESSIONS_HISTORY_MAX_BYTES\s*=\s*80\s*\*\s*1024/, replace: "const SESSIONS_HISTORY_MAX_BYTES = 512 * 1024", optional: true },
  { name: "LAST_MSG_MAX_BYTES", find: "const LAST_MSG_MAX_BYTES = 16384", replace: "const LAST_MSG_MAX_BYTES = 65536", optional: true },
  { name: "LAST_MSG_MAX_BYTES (alt)", regex: /const LAST_MSG_MAX_BYTES\s*=\s*16384\b/, replace: "const LAST_MSG_MAX_BYTES = 65536", optional: true },

  // Steer & context chars
  { name: "MAX_STEER_MESSAGE_CHARS", find: "const MAX_STEER_MESSAGE_CHARS = 4e3", replace: "const MAX_STEER_MESSAGE_CHARS = 16e3", optional: true },
  { name: "MAX_STEER_MESSAGE_CHARS (alt)", regex: /const MAX_STEER_MESSAGE_CHARS\s*=\s*4e3\b/, replace: "const MAX_STEER_MESSAGE_CHARS = 16e3", optional: true },
  { name: "MAX_CONTEXT_CHARS", find: "const MAX_CONTEXT_CHARS = 3e3", replace: "const MAX_CONTEXT_CHARS = 16e3", optional: true },
  { name: "MAX_CONTEXT_CHARS (alt)", regex: /const MAX_CONTEXT_CHARS\s*=\s*3e3\b/, replace: "const MAX_CONTEXT_CHARS = 16e3", optional: true },
  { name: "MAX_SUMMARY_CONTEXT_CHARS", find: "const MAX_SUMMARY_CONTEXT_CHARS = 2e3", replace: "const MAX_SUMMARY_CONTEXT_CHARS = 8e3", optional: true },
  { name: "MAX_SUMMARY_CONTEXT_CHARS (alt)", regex: /const MAX_SUMMARY_CONTEXT_CHARS\s*=\s*2e3\b/, replace: "const MAX_SUMMARY_CONTEXT_CHARS = 8e3", optional: true },
  { name: "MAX_INSTRUCTION_LENGTH", find: "const MAX_INSTRUCTION_LENGTH = 800", replace: "const MAX_INSTRUCTION_LENGTH = 4000", optional: true },
  { name: "MAX_INSTRUCTION_LENGTH (alt)", regex: /const MAX_INSTRUCTION_LENGTH\s*=\s*800\b/, replace: "const MAX_INSTRUCTION_LENGTH = 4000", optional: true },

  // Fork / compaction / quality
  { name: "DEFAULT_PARENT_FORK_MAX_TOKENS", find: "const DEFAULT_PARENT_FORK_MAX_TOKENS = 1e5", replace: "const DEFAULT_PARENT_FORK_MAX_TOKENS = 2e5", optional: true },
  { name: "DEFAULT_PARENT_FORK_MAX_TOKENS (alt)", regex: /const DEFAULT_PARENT_FORK_MAX_TOKENS\s*=\s*1e5\b/, replace: "const DEFAULT_PARENT_FORK_MAX_TOKENS = 2e5", optional: true },
  { name: "DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR", find: "const DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR = 2e4", replace: "const DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR = 5e4", optional: true },
  { name: "DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR (alt)", regex: /const DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR\s*=\s*2e4\b/, replace: "const DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR = 5e4", optional: true },
  { name: "MAX_QUALITY_GUARD_MAX_RETRIES", find: "const MAX_QUALITY_GUARD_MAX_RETRIES = 3", replace: "const MAX_QUALITY_GUARD_MAX_RETRIES = 8", optional: true },
  { name: "MAX_QUALITY_GUARD_MAX_RETRIES (alt)", regex: /const MAX_QUALITY_GUARD_MAX_RETRIES\s*=\s*3\b/, replace: "const MAX_QUALITY_GUARD_MAX_RETRIES = 8", optional: true },
  { name: "DEFAULT_QUALITY_GUARD_MAX_RETRIES", find: "const DEFAULT_QUALITY_GUARD_MAX_RETRIES = 1", replace: "const DEFAULT_QUALITY_GUARD_MAX_RETRIES = 8", optional: true },
  { name: "DEFAULT_QUALITY_GUARD_MAX_RETRIES (alt)", regex: /const DEFAULT_QUALITY_GUARD_MAX_RETRIES\s*=\s*1\b/, replace: "const DEFAULT_QUALITY_GUARD_MAX_RETRIES = 8", optional: true },
  { name: "MAX_TOOL_FAILURES", find: "const MAX_TOOL_FAILURES = 8", replace: "const MAX_TOOL_FAILURES = 32", optional: true },
  { name: "MAX_TOOL_FAILURES (alt)", regex: /const MAX_TOOL_FAILURES\s*=\s*8\b/, replace: "const MAX_TOOL_FAILURES = 32", optional: true },

  // Turn & snapshot limits
  { name: "MAX_RECENT_TURN_TEXT_CHARS", find: "const MAX_RECENT_TURN_TEXT_CHARS = 600", replace: "const MAX_RECENT_TURN_TEXT_CHARS = 2000", optional: true },
  { name: "MAX_RECENT_TURN_TEXT_CHARS (alt)", regex: /const MAX_RECENT_TURN_TEXT_CHARS\s*=\s*600\b/, replace: "const MAX_RECENT_TURN_TEXT_CHARS = 2000", optional: true },
  { name: "MAX_BTW_SNAPSHOT_MESSAGES", find: "const MAX_BTW_SNAPSHOT_MESSAGES = 100", replace: "const MAX_BTW_SNAPSHOT_MESSAGES = 500", optional: true },
  { name: "MAX_BTW_SNAPSHOT_MESSAGES (alt)", regex: /const MAX_BTW_SNAPSHOT_MESSAGES\s*=\s*100\b/, replace: "const MAX_BTW_SNAPSHOT_MESSAGES = 500", optional: true },
  { name: "MAX_EXTRACTED_IDENTIFIERS", find: "const MAX_EXTRACTED_IDENTIFIERS = 12", replace: "const MAX_EXTRACTED_IDENTIFIERS = 30", optional: true },
  { name: "MAX_EXTRACTED_IDENTIFIERS (alt)", regex: /const MAX_EXTRACTED_IDENTIFIERS\s*=\s*12\b/, replace: "const MAX_EXTRACTED_IDENTIFIERS = 30", optional: true },

  // Image & media limits (verified in v3.24 pi-embedded)
  { name: "DEFAULT_MAX_PDFS", find: "const DEFAULT_MAX_PDFS = 10", replace: "const DEFAULT_MAX_PDFS = 30", optional: true },
  { name: "DEFAULT_MAX_PDFS (alt)", regex: /const DEFAULT_MAX_PDFS\s*=\s*10\b/, replace: "const DEFAULT_MAX_PDFS = 30", optional: true },
  { name: "DEFAULT_MAX_PAGES", find: "const DEFAULT_MAX_PAGES = 20", replace: "const DEFAULT_MAX_PAGES = 100", optional: true },
  { name: "DEFAULT_MAX_PAGES (alt)", regex: /const DEFAULT_MAX_PAGES\s*=\s*20\b/, replace: "const DEFAULT_MAX_PAGES = 100", optional: true },
  { name: "DEFAULT_MAX_IMAGES", find: "const DEFAULT_MAX_IMAGES = 20", replace: "const DEFAULT_MAX_IMAGES = 100", optional: true },
  { name: "DEFAULT_MAX_IMAGES (alt)", regex: /const DEFAULT_MAX_IMAGES\s*=\s*20\b/, replace: "const DEFAULT_MAX_IMAGES = 100", optional: true },
  { name: "MAX_PHOTOS_LIMIT", find: "const MAX_PHOTOS_LIMIT = 20", replace: "const MAX_PHOTOS_LIMIT = 100", optional: true },
  { name: "MAX_PHOTOS_LIMIT (alt)", regex: /const MAX_PHOTOS_LIMIT\s*=\s*20\b/, replace: "const MAX_PHOTOS_LIMIT = 100", optional: true },
  { name: "MAX_INPUT_IMAGES", find: "const MAX_INPUT_IMAGES = 5", replace: "const MAX_INPUT_IMAGES = 20", optional: true },
  { name: "MAX_INPUT_IMAGES (alt)", regex: /const MAX_INPUT_IMAGES\s*=\s*5\b/, replace: "const MAX_INPUT_IMAGES = 20", optional: true },

  // Spawn runtime limits (in pi-embedded, not io)
  { name: "maxChildrenPerAgent nullish", find: "maxChildrenPerAgent ?? 5", replace: "maxChildrenPerAgent ?? 999", optional: true },
  { name: "maxSpawnDepth fallback", find: "params.maxSpawnDepth)) : 1", replace: "params.maxSpawnDepth)) : 99", optional: true },

  // Bootstrap total
  { name: "DEFAULT_BOOTSTRAP_TOTAL_MAX_CHARS", find: "const DEFAULT_BOOTSTRAP_TOTAL_MAX_CHARS = 15e4", replace: "const DEFAULT_BOOTSTRAP_TOTAL_MAX_CHARS = 5e5", optional: true },
  { name: "DEFAULT_BOOTSTRAP_TOTAL_MAX_CHARS (alt)", regex: /const DEFAULT_BOOTSTRAP_TOTAL_MAX_CHARS\s*=\s*15e4\b/, replace: "const DEFAULT_BOOTSTRAP_TOTAL_MAX_CHARS = 5e5", optional: true },

  // Error & fetch limits
  { name: "DEFAULT_ERROR_MAX_BYTES", find: "const DEFAULT_ERROR_MAX_BYTES = 64e3", replace: "const DEFAULT_ERROR_MAX_BYTES = 256e3", optional: true },
  { name: "DEFAULT_ERROR_MAX_CHARS", find: "const DEFAULT_ERROR_MAX_CHARS = 4e3", replace: "const DEFAULT_ERROR_MAX_CHARS = 16e3", optional: true },
  { name: "DEFAULT_FETCH_MAX_CHARS", find: "const DEFAULT_FETCH_MAX_CHARS = 5e4", replace: "const DEFAULT_FETCH_MAX_CHARS = 2e5", optional: true },
  { name: "DEFAULT_FETCH_MAX_RESPONSE_BYTES", find: "const DEFAULT_FETCH_MAX_RESPONSE_BYTES = 2e6", replace: "const DEFAULT_FETCH_MAX_RESPONSE_BYTES = 1e7", optional: true },

  // Command chars
  { name: "MAX_COMMAND_CHARS", find: "const MAX_COMMAND_CHARS = 1e4", replace: "const MAX_COMMAND_CHARS = 5e4", optional: true },
  { name: "MAX_COMMAND_CHARS (alt)", regex: /const MAX_COMMAND_CHARS\s*=\s*1e4\b/, replace: "const MAX_COMMAND_CHARS = 5e4", optional: true },

  // Tool result context share
  { name: "MAX_TOOL_RESULT_CONTEXT_SHARE", find: "const MAX_TOOL_RESULT_CONTEXT_SHARE = .3", replace: "const MAX_TOOL_RESULT_CONTEXT_SHARE = .8", optional: true },

  // Toolcall repair
  { name: "MAX_TOOLCALL_REPAIR_BUFFER_CHARS", find: "const MAX_TOOLCALL_REPAIR_BUFFER_CHARS = 64e3", replace: "const MAX_TOOLCALL_REPAIR_BUFFER_CHARS = 256e3", optional: true },

  // Pending output
  { name: "DEFAULT_PENDING_OUTPUT_CHARS", find: "const DEFAULT_PENDING_OUTPUT_CHARS = 3e4", replace: "const DEFAULT_PENDING_OUTPUT_CHARS = 1e5", optional: true },

  // Scrape & embedding limits
  { name: "DEFAULT_SCRAPE_MAX_CHARS", find: "const DEFAULT_SCRAPE_MAX_CHARS = 5e4", replace: "const DEFAULT_SCRAPE_MAX_CHARS = 2e5", optional: true },
  { name: "DEFAULT_EMBEDDING_MAX_INPUT_TOKENS", find: "const DEFAULT_EMBEDDING_MAX_INPUT_TOKENS = 8192", replace: "const DEFAULT_EMBEDDING_MAX_INPUT_TOKENS = 32768", optional: true },
  { name: "MAX_RETRIES", find: "const MAX_RETRIES = 5", replace: "const MAX_RETRIES = 15", optional: true },
  { name: "DEFAULT_MAX_TEXT_LENGTH", find: "const DEFAULT_MAX_TEXT_LENGTH = 4096", replace: "const DEFAULT_MAX_TEXT_LENGTH = 16384", optional: true },
  { name: "MAX_ARGS_LENGTH", find: "const MAX_ARGS_LENGTH = 4096", replace: "const MAX_ARGS_LENGTH = 16384", optional: true },
  { name: "DEFAULT_DEFERRAL_MAX_WAIT_MS", find: "const DEFAULT_DEFERRAL_MAX_WAIT_MS = 3e5", replace: "const DEFAULT_DEFERRAL_MAX_WAIT_MS = 9e5", optional: true },
  { name: "DEFAULT_MAX_EXITED_RECORDS", find: "const DEFAULT_MAX_EXITED_RECORDS = 2e3", replace: "const DEFAULT_MAX_EXITED_RECORDS = 1e4", optional: true },

  // Memory flush tool restriction — allow all tools during flush
  { name: "memoryFlush readOnly tools", regex: /memoryFlush[^}]*tools\s*:\s*\[\s*["']read["']\s*,\s*["']write["']\s*\]/, replace: 'memoryFlush:{tools:["*"]', optional: true },
  { name: "flushAllowedTools restricted", regex: /flushAllowedTools\s*=\s*\[\s*["']read["']\s*,\s*["']write["']\s*\]/, replace: 'flushAllowedTools=["*"]', optional: true },
  { name: "FLUSH_ALLOWED_TOOLS", regex: /FLUSH_ALLOWED_TOOLS\s*=\s*\[[^\]]*\]/, replace: 'FLUSH_ALLOWED_TOOLS=["*"]', optional: true },

  // Untrusted instruction chars
  { name: "MAX_UNTRUSTED_INSTRUCTION_CHARS", find: "const MAX_UNTRUSTED_INSTRUCTION_CHARS = 4e3", replace: "const MAX_UNTRUSTED_INSTRUCTION_CHARS = 16e3", optional: true },

  // Fingerprint message chars
  { name: "MAX_FINGERPRINT_MESSAGE_CHARS", find: "const MAX_FINGERPRINT_MESSAGE_CHARS = 8e3", replace: "const MAX_FINGERPRINT_MESSAGE_CHARS = 32e3", optional: true },
];

/**
 * TIER 1: Hardcoded Limits — gateway-cli-*.js
 */
const GATEWAY_CLI_PATCHES = [
  { name: "MAX_SESSION_HISTORY_LIMIT", find: "const MAX_SESSION_HISTORY_LIMIT = 1e3", replace: "const MAX_SESSION_HISTORY_LIMIT = 1e4", optional: true },
  { name: "MAX_SESSION_HISTORY_LIMIT (alt)", regex: /const MAX_SESSION_HISTORY_LIMIT\s*=\s*1e3\b/, replace: "const MAX_SESSION_HISTORY_LIMIT = 1e4", optional: true },
  { name: "MAX_RESPONSE_SESSION_ENTRIES", find: "const MAX_RESPONSE_SESSION_ENTRIES = 500", replace: "const MAX_RESPONSE_SESSION_ENTRIES = 5000", optional: true },
  { name: "MAX_RESPONSE_SESSION_ENTRIES (alt)", regex: /const MAX_RESPONSE_SESSION_ENTRIES\s*=\s*500\b/, replace: "const MAX_RESPONSE_SESSION_ENTRIES = 5000", optional: true },
  { name: "CONTROL_PLANE_RATE_LIMIT_MAX_REQUESTS", find: "const CONTROL_PLANE_RATE_LIMIT_MAX_REQUESTS = 3", replace: "const CONTROL_PLANE_RATE_LIMIT_MAX_REQUESTS = 50", optional: true },
  { name: "CONTROL_PLANE_RATE_LIMIT_MAX_REQUESTS (alt)", regex: /const CONTROL_PLANE_RATE_LIMIT_MAX_REQUESTS\s*=\s*3\b/, replace: "const CONTROL_PLANE_RATE_LIMIT_MAX_REQUESTS = 50", optional: true },
  { name: "CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES", find: "const CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES = 128 * 1024", replace: "const CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES = 512 * 1024", optional: true },
  { name: "CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES (alt)", regex: /const CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES\s*=\s*128\s*\*\s*1024/, replace: "const CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES = 512 * 1024", optional: true },
  { name: "MAX_PAYLOAD_BYTES", find: "const MAX_PAYLOAD_BYTES = 25 * 1024 * 1024", replace: "const MAX_PAYLOAD_BYTES = 100 * 1024 * 1024", optional: true },
  { name: "MAX_PAYLOAD_BYTES (alt)", regex: /const MAX_PAYLOAD_BYTES\s*=\s*25\s*\*\s*1024\s*\*\s*1024/, replace: "const MAX_PAYLOAD_BYTES = 100 * 1024 * 1024", optional: true },
  { name: "MAX_BUFFERED_BYTES", find: "const MAX_BUFFERED_BYTES = 50 * 1024 * 1024", replace: "const MAX_BUFFERED_BYTES = 200 * 1024 * 1024", optional: true },
  { name: "MAX_BUFFERED_BYTES (alt)", regex: /const MAX_BUFFERED_BYTES\s*=\s*50\s*\*\s*1024\s*\*\s*1024/, replace: "const MAX_BUFFERED_BYTES = 200 * 1024 * 1024", optional: true },
  { name: "MAX_RESTART_ATTEMPTS", find: "const MAX_RESTART_ATTEMPTS = 10", replace: "const MAX_RESTART_ATTEMPTS = 30", optional: true },
  { name: "MAX_RESTART_ATTEMPTS (alt)", regex: /const MAX_RESTART_ATTEMPTS\s*=\s*10\b/, replace: "const MAX_RESTART_ATTEMPTS = 30", optional: true },

  // Image & URL limits (in gateway-cli, not pi-embedded)
  { name: "DEFAULT_OPENAI_MAX_IMAGE_PARTS", find: "const DEFAULT_OPENAI_MAX_IMAGE_PARTS = 8", replace: "const DEFAULT_OPENAI_MAX_IMAGE_PARTS = 20", optional: true },
  { name: "DEFAULT_OPENAI_MAX_IMAGE_PARTS (alt)", regex: /const DEFAULT_OPENAI_MAX_IMAGE_PARTS\s*=\s*8\b/, replace: "const DEFAULT_OPENAI_MAX_IMAGE_PARTS = 20", optional: true },
  { name: "DEFAULT_OPENAI_MAX_TOTAL_IMAGE_BYTES", find: "const DEFAULT_OPENAI_MAX_TOTAL_IMAGE_BYTES = 20 * 1024 * 1024", replace: "const DEFAULT_OPENAI_MAX_TOTAL_IMAGE_BYTES = 50 * 1024 * 1024", optional: true },
  { name: "DEFAULT_OPENAI_MAX_TOTAL_IMAGE_BYTES (alt)", regex: /const DEFAULT_OPENAI_MAX_TOTAL_IMAGE_BYTES\s*=\s*20\s*\*\s*1024\s*\*\s*1024/, replace: "const DEFAULT_OPENAI_MAX_TOTAL_IMAGE_BYTES = 50 * 1024 * 1024", optional: true },
  { name: "DEFAULT_MAX_URL_PARTS", find: "const DEFAULT_MAX_URL_PARTS = 8", replace: "const DEFAULT_MAX_URL_PARTS = 20", optional: true },
  { name: "DEFAULT_MAX_URL_PARTS (alt)", regex: /const DEFAULT_MAX_URL_PARTS\s*=\s*8\b/, replace: "const DEFAULT_MAX_URL_PARTS = 20", optional: true },

  // Embedding limits
  { name: "MAX_EMBEDDING_INPUTS", find: "const MAX_EMBEDDING_INPUTS = 128", replace: "const MAX_EMBEDDING_INPUTS = 512", optional: true },
  { name: "MAX_EMBEDDING_INPUT_CHARS", find: "const MAX_EMBEDDING_INPUT_CHARS = 8192", replace: "const MAX_EMBEDDING_INPUT_CHARS = 32768", optional: true },
  { name: "MAX_EMBEDDING_TOTAL_CHARS", find: "const MAX_EMBEDDING_TOTAL_CHARS = 65536", replace: "const MAX_EMBEDDING_TOTAL_CHARS = 262144", optional: true },

  // Hooks body limit
  { name: "DEFAULT_HOOKS_MAX_BODY_BYTES", find: "const DEFAULT_HOOKS_MAX_BODY_BYTES = 256 * 1024", replace: "const DEFAULT_HOOKS_MAX_BODY_BYTES = 1024 * 1024", optional: true },

  // Max transient retries
  { name: "DEFAULT_MAX_TRANSIENT_RETRIES", find: "const DEFAULT_MAX_TRANSIENT_RETRIES = 3", replace: "const DEFAULT_MAX_TRANSIENT_RETRIES = 10", optional: true },

  // Security: checkBrowserOrigin bypass
  { name: "checkBrowserOrigin bypass", find: "function checkBrowserOrigin(params) {", replace: "function checkBrowserOrigin(params) { return { ok: true };", optional: true },

  // Security: clearUnboundScopes bypass
  { name: "clearUnboundScopes bypass", find: "const clearUnboundScopes = () => {", replace: "const clearUnboundScopes = () => { return;", optional: true },
];

/**
 * TIER 1: Hardcoded Limits — session-*.js
 */
const SESSION_PATCHES = [
  { name: "_maxListeners 100", find: "_maxListeners = 100", replace: "_maxListeners = 1000", optional: true },
  { name: "_maxListeners 100 (alt)", regex: /_maxListeners\s*=\s*100\b/, replace: "_maxListeners = 1000", optional: true },
  { name: "depthLimit 5", find: "depthLimit: 5", replace: "depthLimit: 20", optional: true },
  { name: "depthLimit 5 (alt)", regex: /depthLimit\s*:\s*5\b/, replace: "depthLimit: 20", optional: true },
];

/**
 * TIER 2: Security Gate — ssrf-*.js
 */
const SSRF_PATCHES = [
  { name: "ssrf-isPrivateIp", find: "function isPrivateIpAddress(address, policy) {", replace: "function isPrivateIpAddress(address, policy) { return false;", optional: true },
  { name: "ssrf-isBlockedHostname", find: "function isBlockedHostname(hostname) {", replace: "function isBlockedHostname(hostname) { return false;", optional: true },
  { name: "ssrf-isBlockedHostnameOrIp", find: "function isBlockedHostnameOrIp(hostname, policy) {", replace: "function isBlockedHostnameOrIp(hostname, policy) { return false;", optional: true },
];

/**
 * TIER 2: Security Gate — sandbox-*.js
 */
const SANDBOX_PATCHES = [
  { name: "sandbox-shouldSandbox", find: "function shouldSandboxSession(cfg, sessionKey, mainSessionKey) {", replace: "function shouldSandboxSession(cfg, sessionKey, mainSessionKey) { return false;", optional: true },
];

/**
 * TIER 2: Security Gate — tool-policy-match-*.js
 */
const TOOL_POLICY_PATCHES = [
  { name: "toolpolicy-allowed", find: "function isToolAllowedByPolicyName(name, policy) {", replace: "function isToolAllowedByPolicyName(name, policy) { return true;", optional: true },
];

/**
 * TIER 2: Security Gate — path-alias-guards-*.js
 */
const PATH_ALIAS_PATCHES = [
  { name: "pathguard-escape", find: "async function assertNoPathAliasEscape(params) {", replace: "async function assertNoPathAliasEscape(params) { return;", optional: true },
];

/**
 * TIER 2: Security Gate — exec-inline-eval-*.js
 */
const EXEC_INLINE_PATCHES = [
  { name: "execeval-detect", find: "function detectInterpreterInlineEvalArgv(argv) {", replace: "function detectInterpreterInlineEvalArgv(argv) { return null;", optional: true },
];

/**
 * TIER 2: Security Gate — node-command-policy-*.js
 */
const NODE_COMMAND_PATCHES = [
  { name: "nodecmd-allowed", find: "function isNodeCommandAllowed(params) {", replace: 'function isNodeCommandAllowed(params) { return { ok: true };', optional: true },
];

/**
 * TIER 2: Security Gate — method-scopes-*.js
 */
const METHOD_SCOPES_PATCHES = [
  { name: "methodscope-auth", find: "function authorizeOperatorScopesForMethod(method, scopes) {", replace: 'function authorizeOperatorScopesForMethod(method, scopes) { return { allowed: true };', optional: true },
];

/**
 * TIER 2: Security Gate — docker-*.js
 */
const DOCKER_PATCHES = [
  { name: "docker-owneronly", find: "function isOwnerOnlyTool(tool) {", replace: "function isOwnerOnlyTool(tool) { return false;", optional: true },
  { name: "docker-shouldSandbox", find: "function shouldSandboxSession(mode, sessionKey, mainKey) {", replace: "function shouldSandboxSession(mode, sessionKey, mainKey) { return false;", optional: true },
];

/**
 * TIER 2: Security Gate — sandbox-paths-*.js
 */
const SANDBOX_PATHS_PATCHES = [
  { name: "sandbox-assertSandboxPath", find: "async function assertSandboxPath(params) {", replace: "async function assertSandboxPath(params) { return;", optional: true },
  { name: "sandbox-assertMediaNotDataUrl", find: "function assertMediaNotDataUrl(media) {", replace: "function assertMediaNotDataUrl(media) { return;", optional: true },
  { name: "sandbox-assertNoTmpAliasEscape", find: "async function assertNoTmpAliasEscape(params) {", replace: "async function assertNoTmpAliasEscape(params) { return;", optional: true },
];

/**
 * TIER 2: Security Gate — ssrf-policy-*.js
 */
const SSRF_POLICY_PATCHES = [
  { name: "ssrf-assertHttpUrlPrivate", find: "async function assertHttpUrlTargetsPrivateNetwork(url, params = {}) {", replace: "async function assertHttpUrlTargetsPrivateNetwork(url, params = {}) { return;", optional: true },
];

/**
 * TIER 2: Security Gate — local-file-access-*.js
 */
const LOCAL_FILE_PATCHES = [
  { name: "localfile-unc", find: 'function assertNoWindowsNetworkPath(filePath, label = "Path")', replace: 'function assertNoWindowsNetworkPath() { return; } function _orig(filePath, label = "Path")', optional: true },
];

/**
 * TIER 2: Security Gate — webhook-ingress-*.js
 */
const WEBHOOK_PATCHES = [
  { name: "webhook-routes", find: 'PROTECTED_PLUGIN_ROUTE_PREFIXES = ["/api/channels"]', replace: 'PROTECTED_PLUGIN_ROUTE_PREFIXES = []', optional: true },
];

/**
 * TIER 2: Security Gate — skills-*.js (path boundary)
 */
const SKILLS_PATCHES = [
  { name: "skills-boundary", find: "if (isPathInside(params.rootRealPath, candidateRealPath)) return candidateRealPath;", replace: "return candidateRealPath; if (isPathInside(params.rootRealPath, candidateRealPath)) return candidateRealPath;", optional: true },
];

/**
 * TIER 2: Env var blacklists + safe-bin — env-*.js
 */
const ENV_PATCHES = [
  // Env var danger functions → return false
  { name: "env-isDangerousHostEnvVarName", find: "function isDangerousHostEnvVarName(rawKey) {", replace: "function isDangerousHostEnvVarName(rawKey) { return false;", optional: true },
  { name: "env-isDangerousHostEnvOverrideVarName", find: "function isDangerousHostEnvOverrideVarName(rawKey) {", replace: "function isDangerousHostEnvOverrideVarName(rawKey) { return false;", optional: true },

  // Safe-bin restoration: add jq, sort, grep to DEFAULT_SAFE_BINS
  { name: "safeBins add jq/sort/grep", find: 'const DEFAULT_SAFE_BINS = [\n\t"cut",\n\t"uniq",\n\t"head",\n\t"tail",\n\t"tr",\n\t"wc"\n]', replace: 'const DEFAULT_SAFE_BINS = [\n\t"cut",\n\t"uniq",\n\t"head",\n\t"tail",\n\t"tr",\n\t"wc",\n\t"jq",\n\t"sort",\n\t"grep"\n]', optional: true },
  { name: "safeBins add jq/sort/grep (regex)", regex: /(DEFAULT_SAFE_BINS\s*=\s*\[)([^\]]*)\]/, replace: '$1$2,"jq","sort","grep"]', optional: true },
];

/**
 * TIER 2: Exec approvals — exec-approvals-*.js
 */
const EXEC_APPROVALS_PATCHES = [
  { name: "exec-isSafeBinUsage", find: "function isSafeBinUsage(params) {", replace: "function isSafeBinUsage(params) { return true;", optional: true },
];

// ─── File Target Map ─────────────────────────────────────────────

const FILE_TARGETS = [
  { prefix: "pi-embedded", patches: PI_EMBEDDED_PATCHES, label: "Core Engine (pi-embedded)" },
  { prefix: "gateway-cli", patches: GATEWAY_CLI_PATCHES, label: "Gateway CLI (gateway-cli)" },
  { prefix: "session", patches: SESSION_PATCHES, label: "Session Manager (session)" },
  { prefix: "ssrf", patches: SSRF_PATCHES, label: "SSRF Guard (ssrf)" },
  { prefix: "sandbox", patches: SANDBOX_PATCHES, label: "Sandbox Guard (sandbox)" },
  { prefix: "tool-policy-match", patches: TOOL_POLICY_PATCHES, label: "Tool Policy (tool-policy)" },
  { prefix: "path-alias-guards", patches: PATH_ALIAS_PATCHES, label: "Path Alias Guard (path-alias)" },
  { prefix: "exec-inline-eval", patches: EXEC_INLINE_PATCHES, label: "Exec Inline Eval (exec-inline)" },
  { prefix: "node-command-policy", patches: NODE_COMMAND_PATCHES, label: "Node Command (node-command)" },
  { prefix: "method-scopes", patches: METHOD_SCOPES_PATCHES, label: "Method Scopes (method-scopes)" },
  { prefix: "docker", patches: DOCKER_PATCHES, label: "Docker Guard (docker)", multiFile: true },
  { prefix: "local-file-access", patches: LOCAL_FILE_PATCHES, label: "Local File Access (local-file)" },
  { prefix: "sandbox-paths", patches: SANDBOX_PATHS_PATCHES, label: "Sandbox Paths (sandbox-paths)" },
  { prefix: "ssrf-policy", patches: SSRF_POLICY_PATCHES, label: "SSRF Policy (ssrf-policy)" },
  { prefix: "webhook-ingress", patches: WEBHOOK_PATCHES, label: "Webhook Ingress (webhook)" },
  { prefix: "skills", patches: SKILLS_PATCHES, label: "Skills Boundary (skills)", multiFile: true },
  { prefix: "env", patches: ENV_PATCHES, label: "Env Vars + Safe Bins (env)" },
  { prefix: "exec-approvals", patches: EXEC_APPROVALS_PATCHES, label: "Exec Approvals (exec-approvals)", multiFile: true },
];

// ─── Public API ──────────────────────────────────────────────────

/**
 * Find the OpenClaw dist directory.
 */
export function findDistDir(openclawDir) {
  const candidates = [
    join(openclawDir, "dist"),
    join(openclawDir, "build"),
    join(openclawDir, "lib"),
    join(openclawDir, "out"),
  ];
  for (const dir of candidates) {
    if (existsSync(dir)) return dir;
  }
  return null;
}

/**
 * Auto-detect OpenClaw installation directory.
 */
export function autoDetectOpenClaw() {
  const candidates = [];

  // npm global
  const npmPrefix = process.env.npm_config_prefix || process.env.NPM_CONFIG_PREFIX;
  if (npmPrefix) {
    candidates.push(join(npmPrefix, "lib", "node_modules", "openclaw"));
    candidates.push(join(npmPrefix, "node_modules", "openclaw"));
  }

  // Common locations
  if (process.env.APPDATA) {
    candidates.push(join(process.env.APPDATA, "npm", "node_modules", "openclaw"));
    candidates.push(join(process.env.APPDATA, "openclaw"));
  }
  if (process.env.HOME) {
    candidates.push(join(process.env.HOME, ".npm-global", "lib", "node_modules", "openclaw"));
    candidates.push(join(process.env.HOME, ".local", "share", "openclaw"));
  }

  // E: drive specific
  candidates.push("E:/OpenClaw");
  candidates.push("C:/OpenClaw");

  // Local node_modules
  candidates.push(join(process.cwd(), "node_modules", "openclaw"));

  for (const dir of candidates) {
    if (existsSync(dir)) {
      const distDir = findDistDir(dir);
      if (distDir) return { openclawDir: dir, distDir };
    }
  }

  return null;
}

/**
 * Apply all patches to an OpenClaw installation.
 */
export function patchAll(openclawDir, { dryRun = false, verbose = false } = {}) {
  const distDir = findDistDir(openclawDir);
  if (!distDir) {
    return { success: false, error: `No dist directory found in ${openclawDir}` };
  }

  const allResults = [];
  let totalApplied = 0;
  let totalSkipped = 0;
  let totalFiles = 0;
  let filesPatched = 0;

  // Apply targeted file patches
  for (const target of FILE_TARGETS) {
    // For multiFile targets, scan ALL matching files
    const filePaths = target.multiFile
      ? resolveAllDistFilesForPrefix(distDir, target.prefix)
      : (() => { const p = resolveDistFile(distDir, target.prefix); return p ? [p] : []; })();

    if (filePaths.length === 0) {
      allResults.push({
        file: target.prefix + "-*.js",
        label: target.label,
        found: false,
        results: [],
      });
      continue;
    }

    for (const filePath of filePaths) {
      totalFiles++;
      let content = readFileSync(filePath, "utf-8");

      if (!dryRun) backupFile(filePath);

      const { content: patched, results } = applyPatches(content, target.patches, { verbose });
      content = patched;

      const applied = results.filter((r) => r.applied).length;
      const skipped = results.filter((r) => !r.applied).length;
      totalApplied += applied;
      totalSkipped += skipped;

      if (applied > 0) {
        filesPatched++;
        if (!dryRun) writeFileSync(filePath, content, "utf-8");
      }

      allResults.push({
        file: basename(filePath),
        filePath,
        label: target.label,
        found: true,
        applied,
        skipped,
        results,
      });
    }
  }

  return {
    success: true,
    distDir,
    totalFiles,
    filesPatched,
    totalApplied,
    totalSkipped,
    dryRun,
    details: allResults,
  };
}

/**
 * Restore all backed-up files.
 */
export function unpatchAll(openclawDir) {
  const distDir = findDistDir(openclawDir);
  if (!distDir) {
    return { success: false, error: `No dist directory found in ${openclawDir}` };
  }

  const files = readdirSync(distDir);
  let restored = 0;

  for (const file of files) {
    if (file.endsWith(".bak.original")) {
      const originalName = file.replace(".bak.original", "");
      const originalPath = join(distDir, originalName);
      const backupFilePath = join(distDir, file);

      copyFileSync(backupFilePath, originalPath);
      unlinkSync(backupFilePath);
      restored++;
    }
  }

  return { success: true, restored, distDir };
}

/**
 * Check current patch status.
 */
export function checkStatus(openclawDir) {
  const distDir = findDistDir(openclawDir);
  if (!distDir) {
    return { found: false, error: `No dist directory found in ${openclawDir}` };
  }

  const files = readdirSync(distDir);
  const backups = files.filter((f) => f.endsWith(".bak.original"));
  const jsFiles = files.filter((f) => f.endsWith(".js"));

  // Check which targets exist
  const targets = FILE_TARGETS.map((t) => {
    const filePath = resolveDistFile(distDir, t.prefix);
    const hasBackup = filePath ? existsSync(backupPath(filePath)) : false;
    return {
      prefix: t.prefix,
      label: t.label,
      found: !!filePath,
      patched: hasBackup,
      file: filePath ? basename(filePath) : null,
    };
  });

  return {
    found: true,
    distDir,
    totalJsFiles: jsFiles.length,
    totalBackups: backups.length,
    isPatched: backups.length > 0,
    targets,
  };
}

// ─── Limit Catalog (for display) ─────────────────────────────────

export const LIMIT_CATALOG = [
  { name: "MAX_RUN_RETRY_ITERATIONS", before: "160", after: "2,000", file: "pi-embedded" },
  { name: "MAX_PING_PONG_TURNS", before: "5", after: "200", file: "pi-embedded" },
  { name: "DEFAULT_PING_PONG_TURNS", before: "5", after: "200", file: "pi-embedded" },
  { name: "DEFAULT_CONTEXT_WINDOW", before: "32,000", after: "200,000", file: "pi-embedded" },
  { name: "DEFAULT_MAX_TOKENS", before: "4,096", after: "16,384", file: "pi-embedded" },
  { name: "HARD_MAX_TOOL_RESULT_CHARS", before: "400,000", after: "2,000,000", file: "pi-embedded" },
  { name: "MAX_OBSERVATION_INPUT_CHARS", before: "64,000", after: "256,000", file: "pi-embedded" },
  { name: "MAX_COMPACTION_SUMMARY_CHARS", before: "16,000", after: "64,000", file: "pi-embedded" },
  { name: "MAX_OVERFLOW_COMPACTION_ATTEMPTS", before: "3", after: "10", file: "pi-embedded" },
  { name: "MAX_RECENT_TURNS_PRESERVE", before: "12", after: "48", file: "pi-embedded" },
  { name: "DEFAULT_RECENT_TURNS_PRESERVE", before: "3", after: "8", file: "pi-embedded" },
  { name: "DEFAULT_BOOTSTRAP_MAX_CHARS", before: "20,000", after: "200,000", file: "pi-embedded" },
  { name: "DEFAULT_READ_PAGE_MAX_BYTES", before: "50 KB", after: "512 KB", file: "pi-embedded" },
  { name: "MAX_ADAPTIVE_READ_MAX_BYTES", before: "512 KB", after: "2 MB", file: "pi-embedded" },
  { name: "MAX_ADAPTIVE_READ_PAGES", before: "8", after: "64", file: "pi-embedded" },
  { name: "MAX_JOB_TTL_MS", before: "3 hours", after: "24 hours", file: "pi-embedded" },
  { name: "DEFAULT_JOB_TTL_MS", before: "30 min", after: "2 hours", file: "pi-embedded" },
  { name: "DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS", before: "90 sec", after: "10 min", file: "pi-embedded" },
  { name: "MAX_ANNOUNCE_RETRY_COUNT", before: "3", after: "20", file: "pi-embedded" },
  { name: "DEFAULT_SEARCH_COUNT", before: "5", after: "15", file: "pi-embedded" },
  { name: "DEFAULT_QUEUE_CAP", before: "20", after: "100", file: "pi-embedded" },
  { name: "FROZEN_RESULT_TEXT_MAX_BYTES", before: "100 KB", after: "512 KB", file: "pi-embedded" },
  { name: "SESSIONS_HISTORY_MAX_BYTES", before: "80 KB", after: "512 KB", file: "pi-embedded" },
  { name: "LAST_MSG_MAX_BYTES", before: "16 KB", after: "64 KB", file: "pi-embedded" },
  { name: "MAX_STEER_MESSAGE_CHARS", before: "4,000", after: "16,000", file: "pi-embedded" },
  { name: "MAX_CONTEXT_CHARS", before: "3,000", after: "16,000", file: "pi-embedded" },
  { name: "MAX_SUMMARY_CONTEXT_CHARS", before: "2,000", after: "8,000", file: "pi-embedded" },
  { name: "MAX_INSTRUCTION_LENGTH", before: "800", after: "4,000", file: "pi-embedded" },
  { name: "maxChildrenPerAgent", before: "5", after: "999", file: "pi-embedded" },
  { name: "maxSpawnDepth", before: "1", after: "99", file: "pi-embedded" },
  { name: "MAX_SESSION_HISTORY_LIMIT", before: "1,000", after: "10,000", file: "gateway-cli" },
  { name: "MAX_RESPONSE_SESSION_ENTRIES", before: "500", after: "5,000", file: "gateway-cli" },
  { name: "CONTROL_PLANE_RATE_LIMIT_MAX_REQUESTS", before: "3", after: "50", file: "gateway-cli" },
  { name: "CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES", before: "128 KB", after: "512 KB", file: "gateway-cli" },
  { name: "MAX_PAYLOAD_BYTES", before: "25 MB", after: "100 MB", file: "gateway-cli" },
  { name: "MAX_BUFFERED_BYTES", before: "50 MB", after: "200 MB", file: "gateway-cli" },
  { name: "MAX_RESTART_ATTEMPTS", before: "10", after: "30", file: "gateway-cli" },
  { name: "_maxListeners", before: "100", after: "1,000", file: "session" },
  { name: "depthLimit", before: "5", after: "20", file: "session" },
  { name: "DEFAULT_PARENT_FORK_MAX_TOKENS", before: "100,000", after: "200,000", file: "pi-embedded" },
  { name: "DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR", before: "20,000", after: "50,000", file: "pi-embedded" },
  { name: "MAX_QUALITY_GUARD_MAX_RETRIES", before: "3", after: "8", file: "pi-embedded" },
  { name: "MAX_TOOL_FAILURES", before: "8", after: "32", file: "pi-embedded" },
  { name: "MAX_RECENT_TURN_TEXT_CHARS", before: "600", after: "2,000", file: "pi-embedded" },
  { name: "MAX_BTW_SNAPSHOT_MESSAGES", before: "100", after: "500", file: "pi-embedded" },
  { name: "MAX_EXTRACTED_IDENTIFIERS", before: "12", after: "30", file: "pi-embedded" },
  { name: "DEFAULT_MAX_PDFS", before: "10", after: "30", file: "pi-embedded" },
  { name: "DEFAULT_MAX_PAGES", before: "20", after: "100", file: "pi-embedded" },
  { name: "DEFAULT_MAX_IMAGES", before: "20", after: "100", file: "pi-embedded" },
  { name: "MAX_PHOTOS_LIMIT", before: "20", after: "100", file: "pi-embedded" },
  { name: "MAX_INPUT_IMAGES", before: "5", after: "20", file: "pi-embedded" },
  // Security gates
  { name: "isPrivateIpAddress", before: "blocks private IPs", after: "return false", file: "ssrf" },
  { name: "isBlockedHostname", before: "blocks hostnames", after: "return false", file: "ssrf" },
  { name: "shouldSandboxSession", before: "enforced", after: "return false", file: "sandbox" },
  { name: "isToolAllowedByPolicyName", before: "policy check", after: "return true", file: "tool-policy" },
  { name: "assertNoPathAliasEscape", before: "blocks escape", after: "return", file: "path-alias" },
  { name: "isNodeCommandAllowed", before: "blocks commands", after: "return ok", file: "node-command" },
  { name: "isDangerousHostEnvVarName", before: "blocks env vars", after: "return false", file: "env" },
  { name: "isDangerousHostEnvOverrideVarName", before: "blocks overrides", after: "return false", file: "env" },
  { name: "DEFAULT_SAFE_BINS", before: "cut/uniq/head/tail/tr/wc", after: "+jq/sort/grep", file: "env" },
  { name: "checkBrowserOrigin", before: "blocks cross-origin", after: "return ok", file: "gateway-cli" },
  { name: "clearUnboundScopes", before: "clears scopes", after: "noop", file: "gateway-cli" },
  { name: "PROTECTED_PLUGIN_ROUTE_PREFIXES", before: "/api/channels", after: "empty", file: "webhook-ingress" },
];
