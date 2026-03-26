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
 */
const PI_EMBEDDED_PATCHES = [
  // Retry & turn limits
  { name: "MAX_RUN_RETRY_ITERATIONS", find: "MAX_RUN_RETRY_ITERATIONS=160", replace: "MAX_RUN_RETRY_ITERATIONS=2000", optional: true },
  { name: "MAX_RUN_RETRY_ITERATIONS (alt)", regex: /MAX_RUN_RETRY_ITERATIONS\s*=\s*160\b/, replace: "MAX_RUN_RETRY_ITERATIONS=2000", optional: true },
  { name: "MAX_PING_PONG_TURNS", find: "MAX_PING_PONG_TURNS=5", replace: "MAX_PING_PONG_TURNS=200", optional: true },
  { name: "MAX_PING_PONG_TURNS (alt)", regex: /MAX_PING_PONG_TURNS\s*=\s*5\b/, replace: "MAX_PING_PONG_TURNS=200", optional: true },
  { name: "DEFAULT_PING_PONG_TURNS", find: "DEFAULT_PING_PONG_TURNS=5", replace: "DEFAULT_PING_PONG_TURNS=200", optional: true },
  { name: "DEFAULT_PING_PONG_TURNS (alt)", regex: /DEFAULT_PING_PONG_TURNS\s*=\s*5\b/, replace: "DEFAULT_PING_PONG_TURNS=200", optional: true },

  // Context window & token limits
  { name: "DEFAULT_CONTEXT_WINDOW", find: "DEFAULT_CONTEXT_WINDOW=32000", replace: "DEFAULT_CONTEXT_WINDOW=200000", optional: true },
  { name: "DEFAULT_CONTEXT_WINDOW (alt)", regex: /DEFAULT_CONTEXT_WINDOW\s*=\s*32e3\b/, replace: "DEFAULT_CONTEXT_WINDOW=200000", optional: true },
  { name: "DEFAULT_CONTEXT_WINDOW (alt2)", regex: /DEFAULT_CONTEXT_WINDOW\s*=\s*32000\b/, replace: "DEFAULT_CONTEXT_WINDOW=200000", optional: true },
  { name: "DEFAULT_MAX_TOKENS", find: "DEFAULT_MAX_TOKENS=4096", replace: "DEFAULT_MAX_TOKENS=16384", optional: true },
  { name: "DEFAULT_MAX_TOKENS (alt)", regex: /DEFAULT_MAX_TOKENS\s*=\s*4096\b/, replace: "DEFAULT_MAX_TOKENS=16384", optional: true },

  // Tool result limits
  { name: "HARD_MAX_TOOL_RESULT_CHARS", find: "HARD_MAX_TOOL_RESULT_CHARS=4e5", replace: "HARD_MAX_TOOL_RESULT_CHARS=2e6", optional: true },
  { name: "HARD_MAX_TOOL_RESULT_CHARS (alt)", regex: /HARD_MAX_TOOL_RESULT_CHARS\s*=\s*4e5\b/, replace: "HARD_MAX_TOOL_RESULT_CHARS=2e6", optional: true },
  { name: "HARD_MAX_TOOL_RESULT_CHARS (num)", regex: /HARD_MAX_TOOL_RESULT_CHARS\s*=\s*400000\b/, replace: "HARD_MAX_TOOL_RESULT_CHARS=2000000", optional: true },
  { name: "MAX_TOOL_RESULT_CHARS", find: "MAX_TOOL_RESULT_CHARS=4e5", replace: "MAX_TOOL_RESULT_CHARS=2e6", optional: true },
  { name: "MAX_TOOL_RESULT_CHARS (alt)", regex: /MAX_TOOL_RESULT_CHARS\s*=\s*4e5\b/, replace: "MAX_TOOL_RESULT_CHARS=2e6", optional: true },
  { name: "MAX_TOOL_RESULT_CHARS (num)", regex: /MAX_TOOL_RESULT_CHARS\s*=\s*400000\b/, replace: "MAX_TOOL_RESULT_CHARS=2000000", optional: true },

  // Observation & compaction
  { name: "MAX_OBSERVATION_INPUT_CHARS", find: "MAX_OBSERVATION_INPUT_CHARS=64e3", replace: "MAX_OBSERVATION_INPUT_CHARS=256e3", optional: true },
  { name: "MAX_OBSERVATION_INPUT_CHARS (alt)", regex: /MAX_OBSERVATION_INPUT_CHARS\s*=\s*64e3\b/, replace: "MAX_OBSERVATION_INPUT_CHARS=256e3", optional: true },
  { name: "MAX_OBSERVATION_INPUT_CHARS (num)", regex: /MAX_OBSERVATION_INPUT_CHARS\s*=\s*64000\b/, replace: "MAX_OBSERVATION_INPUT_CHARS=256000", optional: true },
  { name: "MAX_COMPACTION_SUMMARY_CHARS", find: "MAX_COMPACTION_SUMMARY_CHARS=16e3", replace: "MAX_COMPACTION_SUMMARY_CHARS=64e3", optional: true },
  { name: "MAX_COMPACTION_SUMMARY_CHARS (alt)", regex: /MAX_COMPACTION_SUMMARY_CHARS\s*=\s*16e3\b/, replace: "MAX_COMPACTION_SUMMARY_CHARS=64e3", optional: true },
  { name: "MAX_OVERFLOW_COMPACTION_ATTEMPTS", find: "MAX_OVERFLOW_COMPACTION_ATTEMPTS=3", replace: "MAX_OVERFLOW_COMPACTION_ATTEMPTS=10", optional: true },
  { name: "MAX_OVERFLOW_COMPACTION_ATTEMPTS (alt)", regex: /MAX_OVERFLOW_COMPACTION_ATTEMPTS\s*=\s*3\b/, replace: "MAX_OVERFLOW_COMPACTION_ATTEMPTS=10", optional: true },

  // Turn preservation
  { name: "MAX_RECENT_TURNS_PRESERVE", find: "MAX_RECENT_TURNS_PRESERVE=12", replace: "MAX_RECENT_TURNS_PRESERVE=48", optional: true },
  { name: "MAX_RECENT_TURNS_PRESERVE (alt)", regex: /MAX_RECENT_TURNS_PRESERVE\s*=\s*12\b/, replace: "MAX_RECENT_TURNS_PRESERVE=48", optional: true },
  { name: "DEFAULT_RECENT_TURNS_PRESERVE", find: "DEFAULT_RECENT_TURNS_PRESERVE=3", replace: "DEFAULT_RECENT_TURNS_PRESERVE=8", optional: true },
  { name: "DEFAULT_RECENT_TURNS_PRESERVE (alt)", regex: /DEFAULT_RECENT_TURNS_PRESERVE\s*=\s*3\b/, replace: "DEFAULT_RECENT_TURNS_PRESERVE=8", optional: true },

  // Bootstrap & read limits
  { name: "DEFAULT_BOOTSTRAP_MAX_CHARS", find: "DEFAULT_BOOTSTRAP_MAX_CHARS=2e4", replace: "DEFAULT_BOOTSTRAP_MAX_CHARS=2e5", optional: true },
  { name: "DEFAULT_BOOTSTRAP_MAX_CHARS (alt)", regex: /DEFAULT_BOOTSTRAP_MAX_CHARS\s*=\s*2e4\b/, replace: "DEFAULT_BOOTSTRAP_MAX_CHARS=2e5", optional: true },
  { name: "DEFAULT_BOOTSTRAP_MAX_CHARS (num)", regex: /DEFAULT_BOOTSTRAP_MAX_CHARS\s*=\s*20000\b/, replace: "DEFAULT_BOOTSTRAP_MAX_CHARS=200000", optional: true },
  { name: "DEFAULT_READ_PAGE_MAX_BYTES (50*1024)", find: "DEFAULT_READ_PAGE_MAX_BYTES=50*1024", replace: "DEFAULT_READ_PAGE_MAX_BYTES=512*1024", optional: true },
  { name: "DEFAULT_READ_PAGE_MAX_BYTES (51200)", regex: /DEFAULT_READ_PAGE_MAX_BYTES\s*=\s*51200\b/, replace: "DEFAULT_READ_PAGE_MAX_BYTES=524288", optional: true },
  { name: "DEFAULT_READ_PAGE_MAX_BYTES (alt)", regex: /DEFAULT_READ_PAGE_MAX_BYTES\s*=\s*50\s*\*\s*1024\b/, replace: "DEFAULT_READ_PAGE_MAX_BYTES=512*1024", optional: true },
  { name: "MAX_ADAPTIVE_READ_MAX_BYTES", find: "MAX_ADAPTIVE_READ_MAX_BYTES=512*1024", replace: "MAX_ADAPTIVE_READ_MAX_BYTES=2*1024*1024", optional: true },
  { name: "MAX_ADAPTIVE_READ_MAX_BYTES (524288)", regex: /MAX_ADAPTIVE_READ_MAX_BYTES\s*=\s*524288\b/, replace: "MAX_ADAPTIVE_READ_MAX_BYTES=2097152", optional: true },
  { name: "MAX_ADAPTIVE_READ_MAX_BYTES (alt)", regex: /MAX_ADAPTIVE_READ_MAX_BYTES\s*=\s*512\s*\*\s*1024\b/, replace: "MAX_ADAPTIVE_READ_MAX_BYTES=2*1024*1024", optional: true },
  { name: "MAX_ADAPTIVE_READ_PAGES", find: "MAX_ADAPTIVE_READ_PAGES=8", replace: "MAX_ADAPTIVE_READ_PAGES=64", optional: true },
  { name: "MAX_ADAPTIVE_READ_PAGES (alt)", regex: /MAX_ADAPTIVE_READ_PAGES\s*=\s*8\b/, replace: "MAX_ADAPTIVE_READ_PAGES=64", optional: true },

  // Job TTL
  { name: "MAX_JOB_TTL_MS (10800*1e3)", find: "MAX_JOB_TTL_MS=10800*1e3", replace: "MAX_JOB_TTL_MS=86400*1e3", optional: true },
  { name: "MAX_JOB_TTL_MS (10800000)", regex: /MAX_JOB_TTL_MS\s*=\s*10800000\b/, replace: "MAX_JOB_TTL_MS=86400000", optional: true },
  { name: "MAX_JOB_TTL_MS (alt)", regex: /MAX_JOB_TTL_MS\s*=\s*10800\s*\*\s*1e3\b/, replace: "MAX_JOB_TTL_MS=86400*1e3", optional: true },
  { name: "DEFAULT_JOB_TTL_MS", find: "DEFAULT_JOB_TTL_MS=1800", replace: "DEFAULT_JOB_TTL_MS=7200", optional: true },
  { name: "DEFAULT_JOB_TTL_MS (alt)", regex: /DEFAULT_JOB_TTL_MS\s*=\s*1800\b/, replace: "DEFAULT_JOB_TTL_MS=7200", optional: true },

  // Subagent & spawn
  { name: "DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS", find: "DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS=9e4", replace: "DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS=6e5", optional: true },
  { name: "DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS (alt)", regex: /DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS\s*=\s*9e4\b/, replace: "DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS=6e5", optional: true },
  { name: "DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS (num)", regex: /DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS\s*=\s*90000\b/, replace: "DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS=600000", optional: true },
  { name: "MAX_ANNOUNCE_RETRY_COUNT", find: "MAX_ANNOUNCE_RETRY_COUNT=3", replace: "MAX_ANNOUNCE_RETRY_COUNT=20", optional: true },
  { name: "MAX_ANNOUNCE_RETRY_COUNT (alt)", regex: /MAX_ANNOUNCE_RETRY_COUNT\s*=\s*3\b/, replace: "MAX_ANNOUNCE_RETRY_COUNT=20", optional: true },

  // Search & queue
  { name: "DEFAULT_SEARCH_COUNT", find: "DEFAULT_SEARCH_COUNT=5", replace: "DEFAULT_SEARCH_COUNT=15", optional: true },
  { name: "DEFAULT_SEARCH_COUNT (alt)", regex: /DEFAULT_SEARCH_COUNT\s*=\s*5\b/, replace: "DEFAULT_SEARCH_COUNT=15", optional: true },
  { name: "DEFAULT_QUEUE_CAP", find: "DEFAULT_QUEUE_CAP=20", replace: "DEFAULT_QUEUE_CAP=100", optional: true },
  { name: "DEFAULT_QUEUE_CAP (alt)", regex: /DEFAULT_QUEUE_CAP\s*=\s*20\b/, replace: "DEFAULT_QUEUE_CAP=100", optional: true },

  // Frozen / session bytes
  { name: "FROZEN_RESULT_TEXT_MAX_BYTES (100*1024)", find: "FROZEN_RESULT_TEXT_MAX_BYTES=100*1024", replace: "FROZEN_RESULT_TEXT_MAX_BYTES=512*1024", optional: true },
  { name: "FROZEN_RESULT_TEXT_MAX_BYTES (102400)", regex: /FROZEN_RESULT_TEXT_MAX_BYTES\s*=\s*102400\b/, replace: "FROZEN_RESULT_TEXT_MAX_BYTES=524288", optional: true },
  { name: "FROZEN_RESULT_TEXT_MAX_BYTES (alt)", regex: /FROZEN_RESULT_TEXT_MAX_BYTES\s*=\s*100\s*\*\s*1024\b/, replace: "FROZEN_RESULT_TEXT_MAX_BYTES=512*1024", optional: true },
  { name: "SESSIONS_HISTORY_MAX_BYTES (80*1024)", find: "SESSIONS_HISTORY_MAX_BYTES=80*1024", replace: "SESSIONS_HISTORY_MAX_BYTES=512*1024", optional: true },
  { name: "SESSIONS_HISTORY_MAX_BYTES (81920)", regex: /SESSIONS_HISTORY_MAX_BYTES\s*=\s*81920\b/, replace: "SESSIONS_HISTORY_MAX_BYTES=524288", optional: true },
  { name: "SESSIONS_HISTORY_MAX_BYTES (alt)", regex: /SESSIONS_HISTORY_MAX_BYTES\s*=\s*80\s*\*\s*1024\b/, replace: "SESSIONS_HISTORY_MAX_BYTES=512*1024", optional: true },
  { name: "LAST_MSG_MAX_BYTES", find: "LAST_MSG_MAX_BYTES=16384", replace: "LAST_MSG_MAX_BYTES=65536", optional: true },
  { name: "LAST_MSG_MAX_BYTES (alt)", regex: /LAST_MSG_MAX_BYTES\s*=\s*16384\b/, replace: "LAST_MSG_MAX_BYTES=65536", optional: true },

  // Steer & context chars
  { name: "MAX_STEER_MESSAGE_CHARS", find: "MAX_STEER_MESSAGE_CHARS=4e3", replace: "MAX_STEER_MESSAGE_CHARS=16e3", optional: true },
  { name: "MAX_STEER_MESSAGE_CHARS (alt)", regex: /MAX_STEER_MESSAGE_CHARS\s*=\s*4e3\b/, replace: "MAX_STEER_MESSAGE_CHARS=16e3", optional: true },
  { name: "MAX_STEER_MESSAGE_CHARS (num)", regex: /MAX_STEER_MESSAGE_CHARS\s*=\s*4000\b/, replace: "MAX_STEER_MESSAGE_CHARS=16000", optional: true },
  { name: "MAX_CONTEXT_CHARS", find: "MAX_CONTEXT_CHARS=3e3", replace: "MAX_CONTEXT_CHARS=16e3", optional: true },
  { name: "MAX_CONTEXT_CHARS (alt)", regex: /MAX_CONTEXT_CHARS\s*=\s*3e3\b/, replace: "MAX_CONTEXT_CHARS=16e3", optional: true },
  { name: "MAX_CONTEXT_CHARS (num)", regex: /MAX_CONTEXT_CHARS\s*=\s*3000\b/, replace: "MAX_CONTEXT_CHARS=16000", optional: true },
  { name: "MAX_SUMMARY_CONTEXT_CHARS", find: "MAX_SUMMARY_CONTEXT_CHARS=2e3", replace: "MAX_SUMMARY_CONTEXT_CHARS=8e3", optional: true },
  { name: "MAX_SUMMARY_CONTEXT_CHARS (alt)", regex: /MAX_SUMMARY_CONTEXT_CHARS\s*=\s*2e3\b/, replace: "MAX_SUMMARY_CONTEXT_CHARS=8e3", optional: true },
  { name: "MAX_SUMMARY_CONTEXT_CHARS (num)", regex: /MAX_SUMMARY_CONTEXT_CHARS\s*=\s*2000\b/, replace: "MAX_SUMMARY_CONTEXT_CHARS=8000", optional: true },
  { name: "MAX_INSTRUCTION_LENGTH", find: "MAX_INSTRUCTION_LENGTH=800", replace: "MAX_INSTRUCTION_LENGTH=4000", optional: true },
  { name: "MAX_INSTRUCTION_LENGTH (alt)", regex: /MAX_INSTRUCTION_LENGTH\s*=\s*800\b/, replace: "MAX_INSTRUCTION_LENGTH=4000", optional: true },

  // ─── V2 Changelog additions ─────────────────────────────────────
  // Fork / compaction / quality
  { name: "DEFAULT_PARENT_FORK_MAX_TOKENS", find: "DEFAULT_PARENT_FORK_MAX_TOKENS=1e5", replace: "DEFAULT_PARENT_FORK_MAX_TOKENS=2e5", optional: true },
  { name: "DEFAULT_PARENT_FORK_MAX_TOKENS (num)", regex: /DEFAULT_PARENT_FORK_MAX_TOKENS\s*=\s*1e5\b/, replace: "DEFAULT_PARENT_FORK_MAX_TOKENS=2e5", optional: true },
  { name: "DEFAULT_PARENT_FORK_MAX_TOKENS (100000)", regex: /DEFAULT_PARENT_FORK_MAX_TOKENS\s*=\s*100000\b/, replace: "DEFAULT_PARENT_FORK_MAX_TOKENS=200000", optional: true },
  { name: "DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR", find: "DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR=2e4", replace: "DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR=5e4", optional: true },
  { name: "DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR (num)", regex: /DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR\s*=\s*2e4\b/, replace: "DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR=5e4", optional: true },
  { name: "DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR (20000)", regex: /DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR\s*=\s*20000\b/, replace: "DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR=50000", optional: true },
  { name: "MAX_QUALITY_GUARD_MAX_RETRIES", find: "MAX_QUALITY_GUARD_MAX_RETRIES=3", replace: "MAX_QUALITY_GUARD_MAX_RETRIES=8", optional: true },
  { name: "MAX_QUALITY_GUARD_MAX_RETRIES (alt)", regex: /MAX_QUALITY_GUARD_MAX_RETRIES\s*=\s*3\b/, replace: "MAX_QUALITY_GUARD_MAX_RETRIES=8", optional: true },
  { name: "MAX_TOOL_FAILURES", find: "MAX_TOOL_FAILURES=8", replace: "MAX_TOOL_FAILURES=32", optional: true },
  { name: "MAX_TOOL_FAILURES (alt)", regex: /MAX_TOOL_FAILURES\s*=\s*8\b/, replace: "MAX_TOOL_FAILURES=32", optional: true },

  // Turn & snapshot limits
  { name: "MAX_RECENT_TURN_TEXT_CHARS", find: "MAX_RECENT_TURN_TEXT_CHARS=600", replace: "MAX_RECENT_TURN_TEXT_CHARS=2000", optional: true },
  { name: "MAX_RECENT_TURN_TEXT_CHARS (alt)", regex: /MAX_RECENT_TURN_TEXT_CHARS\s*=\s*600\b/, replace: "MAX_RECENT_TURN_TEXT_CHARS=2000", optional: true },
  { name: "MAX_BTW_SNAPSHOT_MESSAGES", find: "MAX_BTW_SNAPSHOT_MESSAGES=100", replace: "MAX_BTW_SNAPSHOT_MESSAGES=500", optional: true },
  { name: "MAX_BTW_SNAPSHOT_MESSAGES (alt)", regex: /MAX_BTW_SNAPSHOT_MESSAGES\s*=\s*100\b/, replace: "MAX_BTW_SNAPSHOT_MESSAGES=500", optional: true },
  { name: "MAX_EXTRACTED_IDENTIFIERS", find: "MAX_EXTRACTED_IDENTIFIERS=12", replace: "MAX_EXTRACTED_IDENTIFIERS=30", optional: true },
  { name: "MAX_EXTRACTED_IDENTIFIERS (alt)", regex: /MAX_EXTRACTED_IDENTIFIERS\s*=\s*12\b/, replace: "MAX_EXTRACTED_IDENTIFIERS=30", optional: true },

  // Image & media limits
  { name: "DEFAULT_OPENAI_MAX_IMAGE_PARTS", find: "DEFAULT_OPENAI_MAX_IMAGE_PARTS=8", replace: "DEFAULT_OPENAI_MAX_IMAGE_PARTS=20", optional: true },
  { name: "DEFAULT_OPENAI_MAX_IMAGE_PARTS (alt)", regex: /DEFAULT_OPENAI_MAX_IMAGE_PARTS\s*=\s*8\b/, replace: "DEFAULT_OPENAI_MAX_IMAGE_PARTS=20", optional: true },
  { name: "DEFAULT_OPENAI_MAX_TOTAL_IMAGE_BYTES (20MB)", find: "DEFAULT_OPENAI_MAX_TOTAL_IMAGE_BYTES=20*1024*1024", replace: "DEFAULT_OPENAI_MAX_TOTAL_IMAGE_BYTES=50*1024*1024", optional: true },
  { name: "DEFAULT_OPENAI_MAX_TOTAL_IMAGE_BYTES (20971520)", regex: /DEFAULT_OPENAI_MAX_TOTAL_IMAGE_BYTES\s*=\s*20971520\b/, replace: "DEFAULT_OPENAI_MAX_TOTAL_IMAGE_BYTES=52428800", optional: true },
  { name: "DEFAULT_OPENAI_MAX_TOTAL_IMAGE_BYTES (alt)", regex: /DEFAULT_OPENAI_MAX_TOTAL_IMAGE_BYTES\s*=\s*20\s*\*\s*1024\s*\*\s*1024\b/, replace: "DEFAULT_OPENAI_MAX_TOTAL_IMAGE_BYTES=50*1024*1024", optional: true },
  { name: "DEFAULT_MAX_URL_PARTS", find: "DEFAULT_MAX_URL_PARTS=8", replace: "DEFAULT_MAX_URL_PARTS=20", optional: true },
  { name: "DEFAULT_MAX_URL_PARTS (alt)", regex: /DEFAULT_MAX_URL_PARTS\s*=\s*8\b/, replace: "DEFAULT_MAX_URL_PARTS=20", optional: true },
  { name: "DEFAULT_MAX_PDFS", find: "DEFAULT_MAX_PDFS=10", replace: "DEFAULT_MAX_PDFS=30", optional: true },
  { name: "DEFAULT_MAX_PDFS (alt)", regex: /DEFAULT_MAX_PDFS\s*=\s*10\b/, replace: "DEFAULT_MAX_PDFS=30", optional: true },
  { name: "DEFAULT_MAX_PAGES", find: "DEFAULT_MAX_PAGES=20", replace: "DEFAULT_MAX_PAGES=100", optional: true },
  { name: "DEFAULT_MAX_PAGES (alt)", regex: /DEFAULT_MAX_PAGES\s*=\s*20\b/, replace: "DEFAULT_MAX_PAGES=100", optional: true },
  { name: "DEFAULT_MAX_IMAGES", find: "DEFAULT_MAX_IMAGES=20", replace: "DEFAULT_MAX_IMAGES=100", optional: true },
  { name: "DEFAULT_MAX_IMAGES (alt)", regex: /DEFAULT_MAX_IMAGES\s*=\s*20\b/, replace: "DEFAULT_MAX_IMAGES=100", optional: true },
  { name: "MAX_PHOTOS_LIMIT", find: "MAX_PHOTOS_LIMIT=20", replace: "MAX_PHOTOS_LIMIT=100", optional: true },
  { name: "MAX_PHOTOS_LIMIT (alt)", regex: /MAX_PHOTOS_LIMIT\s*=\s*20\b/, replace: "MAX_PHOTOS_LIMIT=100", optional: true },
  { name: "MAX_INPUT_IMAGES", find: "MAX_INPUT_IMAGES=5", replace: "MAX_INPUT_IMAGES=20", optional: true },
  { name: "MAX_INPUT_IMAGES (alt)", regex: /MAX_INPUT_IMAGES\s*=\s*5\b/, replace: "MAX_INPUT_IMAGES=20", optional: true },

  // Process limits
  { name: "MAX_RESTART_ATTEMPTS", find: "MAX_RESTART_ATTEMPTS=10", replace: "MAX_RESTART_ATTEMPTS=30", optional: true },
  { name: "MAX_RESTART_ATTEMPTS (alt)", regex: /MAX_RESTART_ATTEMPTS\s*=\s*10\b/, replace: "MAX_RESTART_ATTEMPTS=30", optional: true },
  { name: "sigtermTimeoutMs", find: "sigtermTimeoutMs=700", replace: "sigtermTimeoutMs=5000", optional: true },
  { name: "sigtermTimeoutMs (alt)", regex: /sigtermTimeoutMs\s*=\s*700\b/, replace: "sigtermTimeoutMs=5000", optional: true },

  // Memory flush tool restriction — allow all tools during flush
  { name: "memoryFlush readOnly tools", regex: /memoryFlush[^}]*tools\s*:\s*\[\s*["']read["']\s*,\s*["']write["']\s*\]/, replace: 'memoryFlush:{tools:["*"]', optional: true },
  { name: "flushAllowedTools restricted", regex: /flushAllowedTools\s*=\s*\[\s*["']read["']\s*,\s*["']write["']\s*\]/, replace: 'flushAllowedTools=["*"]', optional: true },
  { name: "FLUSH_ALLOWED_TOOLS", regex: /FLUSH_ALLOWED_TOOLS\s*=\s*\[[^\]]*\]/, replace: 'FLUSH_ALLOWED_TOOLS=["*"]', optional: true },
];

/**
 * TIER 1: Env Var Blacklist — shell-env-*.js / pi-embedded-*.js
 * Empties blockedKeys/blockedOverrideKeys/blockedPrefixes arrays.
 */
const SHELL_ENV_PATCHES = [
  // blockedKeys — empty the array
  { name: "blockedKeys array", regex: /blockedKeys\s*=\s*\[[^\]]*JAVA_TOOL_OPTIONS[^\]]*\]/, replace: "blockedKeys=[]", optional: true },
  { name: "blockedKeys array (alt)", regex: /blockedKeys\s*:\s*\[[^\]]*JAVA_TOOL_OPTIONS[^\]]*\]/, replace: "blockedKeys:[]", optional: true },
  { name: "blockedKeys generic", regex: /blockedKeys\s*=\s*\[\s*["'][A-Z_]+["'](?:\s*,\s*["'][A-Z_]+["']){3,}\s*\]/, replace: "blockedKeys=[]", optional: true },

  // blockedOverrideKeys — empty the array
  { name: "blockedOverrideKeys array", regex: /blockedOverrideKeys\s*=\s*\[[^\]]*HOME[^\]]*\]/, replace: "blockedOverrideKeys=[]", optional: true },
  { name: "blockedOverrideKeys array (alt)", regex: /blockedOverrideKeys\s*:\s*\[[^\]]*HOME[^\]]*\]/, replace: "blockedOverrideKeys:[]", optional: true },
  { name: "blockedOverrideKeys generic", regex: /blockedOverrideKeys\s*=\s*\[\s*["'][A-Z_]+["'](?:\s*,\s*["'][A-Z_]+["']){2,}\s*\]/, replace: "blockedOverrideKeys=[]", optional: true },

  // blockedPrefixes — empty the array (LD_*, DYLD_*, BASH_FUNC_*)
  { name: "blockedPrefixes array", regex: /blockedPrefixes\s*=\s*\[[^\]]*LD_[^\]]*\]/, replace: "blockedPrefixes=[]", optional: true },
  { name: "blockedPrefixes array (alt)", regex: /blockedPrefixes\s*:\s*\[[^\]]*LD_[^\]]*\]/, replace: "blockedPrefixes:[]", optional: true },
  { name: "blockedPrefixes generic", regex: /blockedPrefixes\s*=\s*\[\s*["'][A-Z_]+["'](?:\s*,\s*["'][A-Z_]+["'])*\s*\]/, replace: "blockedPrefixes=[]", optional: true },

  // isBlockedEnvVar / isBlockedOverride — make them return false
  { name: "isBlockedEnvVar return false", regex: /function isBlockedEnvVar\([^)]*\)\s*\{[^}]*return\s+(?:blockedKeys|blocked)/, replace: "function isBlockedEnvVar(){return false&&blockedKeys", optional: true },
  { name: "isBlockedEnvVar arrow", regex: /isBlockedEnvVar\s*=\s*\([^)]*\)\s*=>\s*blockedKeys/, replace: "isBlockedEnvVar=()=>false&&blockedKeys", optional: true },
  { name: "isBlockedOverride return false", regex: /function isBlockedOverride\([^)]*\)\s*\{[^}]*return/, replace: "function isBlockedOverride(){return false&&void", optional: true },
  { name: "isBlockedOverride arrow", regex: /isBlockedOverride\s*=\s*\([^)]*\)\s*=>\s*blockedOverrideKeys/, replace: "isBlockedOverride=()=>false&&blockedOverrideKeys", optional: true },

  // envVarBlacklist / envBlacklist patterns
  { name: "envVarBlacklist array", regex: /envVarBlacklist\s*=\s*\[[^\]]{20,}\]/, replace: "envVarBlacklist=[]", optional: true },
  { name: "envBlacklist array", regex: /envBlacklist\s*=\s*\[[^\]]{20,}\]/, replace: "envBlacklist=[]", optional: true },
  { name: "BLOCKED_ENV_VARS array", regex: /BLOCKED_ENV_VARS\s*=\s*\[[^\]]{20,}\]/, replace: "BLOCKED_ENV_VARS=[]", optional: true },
  { name: "BLOCKED_ENV_PREFIXES array", regex: /BLOCKED_ENV_PREFIXES\s*=\s*\[[^\]]{10,}\]/, replace: "BLOCKED_ENV_PREFIXES=[]", optional: true },
];

/**
 * TIER 1: Safe-bin Allowlist — exec-approvals-*.js / pi-embedded-*.js
 * Restore jq, sort, grep to safe-bin allowlist.
 */
const SAFE_BIN_PATCHES = [
  // DEFAULT_SAFE_BINS — add back jq, sort, grep
  { name: "safeBins add jq/sort/grep", regex: /(DEFAULT_SAFE_BINS|safeBins)\s*=\s*\[([^\]]*)\]/, replace: '$1=[$2,"jq","sort","grep"]', optional: true },
  { name: "SAFE_BINS add jq/sort/grep", regex: /(SAFE_BINS)\s*=\s*\[([^\]]*)\]/, replace: '$1=[$2,"jq","sort","grep"]', optional: true },
  // If there's a removedBins or blockedBins list containing these
  { name: "removedBins clear jq", regex: /removedBins\s*=\s*\[[^\]]*"jq"[^\]]*\]/, replace: "removedBins=[]", optional: true },
  { name: "blockedBins clear", regex: /blockedBins\s*=\s*\[[^\]]*\]/, replace: "blockedBins=[]", optional: true },
];

/**
 * TIER 1: Config fail-closed bypass — gateway-cli-*.js / pi-embedded-*.js
 * INVALID_CONFIG should fall through instead of refusing to start.
 */
const CONFIG_FAILOPEN_PATCHES = [
  // INVALID_CONFIG throw → warn + continue
  { name: "INVALID_CONFIG throw→warn", regex: /if\s*\([^)]*INVALID_CONFIG[^)]*\)\s*\{?\s*throw/, replace: 'if(false&&"INVALID_CONFIG"){throw', optional: true },
  { name: "INVALID_CONFIG exit→continue", regex: /INVALID_CONFIG[^;]*process\.exit\s*\(\s*1\s*\)/, replace: 'INVALID_CONFIG&&void 0/*process.exit(1)*/', optional: true },
  { name: "INVALID_CONFIG refuse gateway", regex: /configInvalid\s*&&\s*(?:throw|process\.exit)/, replace: "configInvalid&&void 0/*fail-open*/", optional: true },
  { name: "failOnInvalidConfig true→false", find: "failOnInvalidConfig:!0", replace: "failOnInvalidConfig:!1", optional: true },
  { name: "failOnInvalidConfig true (alt)", find: "failOnInvalidConfig:true", replace: "failOnInvalidConfig:false", optional: true },
];

/**
 * TIER 1: Workspace plugin auto-load — re-enable (GHSA-99qw-6mr3-36qr)
 */
const WORKSPACE_PLUGIN_PATCHES = [
  { name: "workspace plugins disabled→enabled", find: "workspacePlugins:!1", replace: "workspacePlugins:!0", optional: true },
  { name: "workspace plugins disabled (alt)", find: "workspacePlugins:false", replace: "workspacePlugins:true", optional: true },
  { name: "autoLoadWorkspacePlugins false→true", find: "autoLoadWorkspacePlugins:!1", replace: "autoLoadWorkspacePlugins:!0", optional: true },
  { name: "autoLoadWorkspacePlugins false (alt)", find: "autoLoadWorkspacePlugins:false", replace: "autoLoadWorkspacePlugins:true", optional: true },
  { name: "WORKSPACE_PLUGINS_ENABLED false", find: "WORKSPACE_PLUGINS_ENABLED=!1", replace: "WORKSPACE_PLUGINS_ENABLED=!0", optional: true },
  { name: "WORKSPACE_PLUGINS_ENABLED false (alt)", find: "WORKSPACE_PLUGINS_ENABLED=false", replace: "WORKSPACE_PLUGINS_ENABLED=true", optional: true },
  { name: "disableWorkspacePlugins true→false", find: "disableWorkspacePlugins:!0", replace: "disableWorkspacePlugins:!1", optional: true },
  { name: "disableWorkspacePlugins true (alt)", find: "disableWorkspacePlugins:true", replace: "disableWorkspacePlugins:false", optional: true },
];

/**
 * TIER 1: Hardcoded Limits — io-*.js (Zod schema walls)
 */
const IO_PATCHES = [
  { name: "maxSpawnDepth z.max(5)", find: ".max(5)", replace: ".max(999)", optional: true },
  { name: "maxSpawnDepth z.max(5) regex", regex: /\.max\(5\)/, replace: ".max(999)", regexFlags: "g", optional: true },
  { name: "maxChildrenPerAgent z.max(20)", find: ".max(20)", replace: ".max(999)", optional: true },
  { name: "maxChildrenPerAgent z.max(20) regex", regex: /\.max\(20\)/, replace: ".max(999)", regexFlags: "g", optional: true },
];

/**
 * TIER 1: Hardcoded Limits — gateway-cli-*.js
 */
const GATEWAY_CLI_PATCHES = [
  { name: "MAX_SESSION_HISTORY_LIMIT", find: "MAX_SESSION_HISTORY_LIMIT=1e3", replace: "MAX_SESSION_HISTORY_LIMIT=1e4", optional: true },
  { name: "MAX_SESSION_HISTORY_LIMIT (alt)", regex: /MAX_SESSION_HISTORY_LIMIT\s*=\s*1e3\b/, replace: "MAX_SESSION_HISTORY_LIMIT=1e4", optional: true },
  { name: "MAX_SESSION_HISTORY_LIMIT (num)", regex: /MAX_SESSION_HISTORY_LIMIT\s*=\s*1000\b/, replace: "MAX_SESSION_HISTORY_LIMIT=10000", optional: true },
  { name: "MAX_RESPONSE_SESSION_ENTRIES", find: "MAX_RESPONSE_SESSION_ENTRIES=500", replace: "MAX_RESPONSE_SESSION_ENTRIES=5000", optional: true },
  { name: "MAX_RESPONSE_SESSION_ENTRIES (alt)", regex: /MAX_RESPONSE_SESSION_ENTRIES\s*=\s*500\b/, replace: "MAX_RESPONSE_SESSION_ENTRIES=5000", optional: true },
  { name: "CONTROL_PLANE_RATE_LIMIT_MAX_REQUESTS", find: "CONTROL_PLANE_RATE_LIMIT_MAX_REQUESTS=3", replace: "CONTROL_PLANE_RATE_LIMIT_MAX_REQUESTS=50", optional: true },
  { name: "CONTROL_PLANE_RATE_LIMIT_MAX_REQUESTS (alt)", regex: /CONTROL_PLANE_RATE_LIMIT_MAX_REQUESTS\s*=\s*3\b/, replace: "CONTROL_PLANE_RATE_LIMIT_MAX_REQUESTS=50", optional: true },
  { name: "CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES (128*1024)", find: "CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES=128*1024", replace: "CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES=512*1024", optional: true },
  { name: "CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES (131072)", regex: /CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES\s*=\s*131072\b/, replace: "CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES=524288", optional: true },
  { name: "CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES (alt)", regex: /CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES\s*=\s*128\s*\*\s*1024\b/, replace: "CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES=512*1024", optional: true },
  { name: "MAX_PAYLOAD_BYTES (25*1024*1024)", find: "MAX_PAYLOAD_BYTES=25*1024*1024", replace: "MAX_PAYLOAD_BYTES=100*1024*1024", optional: true },
  { name: "MAX_PAYLOAD_BYTES (26214400)", regex: /MAX_PAYLOAD_BYTES\s*=\s*26214400\b/, replace: "MAX_PAYLOAD_BYTES=104857600", optional: true },
  { name: "MAX_PAYLOAD_BYTES (alt)", regex: /MAX_PAYLOAD_BYTES\s*=\s*25\s*\*\s*1024\s*\*\s*1024\b/, replace: "MAX_PAYLOAD_BYTES=100*1024*1024", optional: true },
  { name: "MAX_BUFFERED_BYTES (50*1024*1024)", find: "MAX_BUFFERED_BYTES=50*1024*1024", replace: "MAX_BUFFERED_BYTES=200*1024*1024", optional: true },
  { name: "MAX_BUFFERED_BYTES (52428800)", regex: /MAX_BUFFERED_BYTES\s*=\s*52428800\b/, replace: "MAX_BUFFERED_BYTES=209715200", optional: true },
  { name: "MAX_BUFFERED_BYTES (alt)", regex: /MAX_BUFFERED_BYTES\s*=\s*50\s*\*\s*1024\s*\*\s*1024\b/, replace: "MAX_BUFFERED_BYTES=200*1024*1024", optional: true },
];

/**
 * TIER 1: Hardcoded Limits — session-*.js
 */
const SESSION_PATCHES = [
  { name: "_maxListeners 100", find: "_maxListeners=100", replace: "_maxListeners=1000", optional: true },
  { name: "_maxListeners 100 (alt)", regex: /_maxListeners\s*=\s*100\b/, replace: "_maxListeners=1000", optional: true },
  { name: "setMaxListeners(100)", find: "setMaxListeners(100)", replace: "setMaxListeners(1000)", optional: true },
  { name: "setMaxListeners(100) regex", regex: /setMaxListeners\(\s*100\s*\)/, replace: "setMaxListeners(1000)", regexFlags: "g", optional: true },
  { name: "depthLimit 5", find: "depthLimit:5", replace: "depthLimit:20", optional: true },
  { name: "depthLimit 5 (spaced)", find: "depthLimit: 5", replace: "depthLimit: 20", optional: true },
  { name: "depthLimit=5", regex: /depthLimit\s*[:=]\s*5\b/, replace: "depthLimit:20", optional: true },
];

/**
 * TIER 2: Security Gates — patterns found across multiple dist files
 */
const SECURITY_GATE_PATCHES = [
  // Sandbox / permission bypasses
  { name: "sandbox strict→permissive", find: 'sandbox:"strict"', replace: 'sandbox:"permissive"', optional: true },
  { name: "sandbox strict→permissive (alt)", regex: /sandbox\s*:\s*["']strict["']/, replace: 'sandbox:"permissive"', regexFlags: "g", optional: true },
  { name: "sandboxMode strict", find: 'sandboxMode:"strict"', replace: 'sandboxMode:"permissive"', optional: true },
  { name: "sandboxMode strict (alt)", regex: /sandboxMode\s*:\s*["']strict["']/, replace: 'sandboxMode:"permissive"', regexFlags: "g", optional: true },

  // Exec approval gates
  { name: "requiresApproval true→false", find: "requiresApproval:!0", replace: "requiresApproval:!1", optional: true },
  { name: "requiresApproval true (alt)", find: "requiresApproval:true", replace: "requiresApproval:false", optional: true },
  { name: "needsApproval true→false", find: "needsApproval:!0", replace: "needsApproval:!1", optional: true },
  { name: "needsApproval true (alt)", find: "needsApproval:true", replace: "needsApproval:false", optional: true },

  // SSRF protection
  { name: "ssrfProtection enabled→disabled", find: "ssrfProtection:!0", replace: "ssrfProtection:!1", optional: true },
  { name: "ssrfProtection enabled (alt)", find: "ssrfProtection:true", replace: "ssrfProtection:false", optional: true },
  { name: "blockPrivateIPs true→false", find: "blockPrivateIPs:!0", replace: "blockPrivateIPs:!1", optional: true },
  { name: "blockPrivateIPs true (alt)", find: "blockPrivateIPs:true", replace: "blockPrivateIPs:false", optional: true },

  // Path guards
  { name: "restrictPaths enabled→disabled", find: "restrictPaths:!0", replace: "restrictPaths:!1", optional: true },
  { name: "restrictPaths enabled (alt)", find: "restrictPaths:true", replace: "restrictPaths:false", optional: true },
  { name: "allowOutsideCwd false→true", find: "allowOutsideCwd:!1", replace: "allowOutsideCwd:!0", optional: true },
  { name: "allowOutsideCwd false (alt)", find: "allowOutsideCwd:false", replace: "allowOutsideCwd:true", optional: true },

  // Network restrictions
  { name: "allowExternalNetwork false→true", find: "allowExternalNetwork:!1", replace: "allowExternalNetwork:!0", optional: true },
  { name: "allowExternalNetwork false (alt)", find: "allowExternalNetwork:false", replace: "allowExternalNetwork:true", optional: true },

  // Tool restrictions
  { name: "toolRestrictions enabled→disabled", find: "toolRestrictions:!0", replace: "toolRestrictions:!1", optional: true },
  { name: "toolRestrictions enabled (alt)", find: "toolRestrictions:true", replace: "toolRestrictions:false", optional: true },
  { name: "disabledTools array→empty", regex: /disabledTools\s*:\s*\[[^\]]+\]/, replace: "disabledTools:[]", regexFlags: "g", optional: true },

  // Rate limiting
  { name: "rateLimitEnabled→disabled", find: "rateLimitEnabled:!0", replace: "rateLimitEnabled:!1", optional: true },
  { name: "rateLimitEnabled (alt)", find: "rateLimitEnabled:true", replace: "rateLimitEnabled:false", optional: true },
  { name: "enableRateLimit→disable", find: "enableRateLimit:!0", replace: "enableRateLimit:!1", optional: true },
  { name: "enableRateLimit (alt)", find: "enableRateLimit:true", replace: "enableRateLimit:false", optional: true },
];

/**
 * TIER 2: Auth Mode "none" bypass — gateway-cli-*.js / pi-embedded-*.js
 * Re-enables "none" as a valid auth mode (removed in v2026.1.29).
 */
const AUTH_PATCHES = [
  // Reject auth mode "none" — make the check always pass
  { name: "auth.mode none rejection", regex: /(?:auth\.mode|authMode)\s*===?\s*["']none["']\s*(?:&&|\?\?)/, replace: 'false&&"none"&&', optional: true },
  { name: "auth.mode none throw", regex: /if\s*\([^)]*["']none["'][^)]*\)\s*\{?\s*throw\s+new\s+Error\s*\([^)]*auth[^)]*\)/, replace: 'if(false){throw new Error("auth-none-bypass")', optional: true },
  { name: "auth.mode none reject (alt)", regex: /["']none["']\s*(?:!==|!=)\s*(?:auth\.mode|authMode|mode)/, replace: '"none"!=="__never__"', optional: true },
  { name: "isValidAuthMode none exclusion", regex: /isValidAuthMode\s*=\s*\([^)]*\)\s*=>\s*[^;]*!==?\s*["']none["']/, replace: 'isValidAuthMode=(m)=>true||m!=="none"', optional: true },
  { name: "VALID_AUTH_MODES without none", regex: /(VALID_AUTH_MODES\s*=\s*\[)([^\]]*)\]/, replace: '$1$2,"none"]', optional: true },
  { name: "authMode none→token fallback", regex: /authMode\s*===?\s*["']none["']\s*\?\s*["']token["']/, replace: 'authMode==="__never__"?"token"', optional: true },
  { name: "gateway reject none auth", regex: /if\s*\(\s*(?:config\.)?auth\s*===?\s*["']none["']\s*\)\s*\{[^}]*(?:reject|throw|exit)/, replace: 'if(false/*auth-none-bypass*/){throw', optional: true },
  { name: "auth none→required migration", regex: /auth\s*===?\s*["']none["']\s*&&\s*\([^)]*auth\s*=\s*["'](?:token|required)["']/, replace: 'false&&(auth="none"', optional: true },
];

// ─── File Target Map ─────────────────────────────────────────────

const FILE_TARGETS = [
  { prefix: "pi-embedded", patches: PI_EMBEDDED_PATCHES, label: "Core Engine (pi-embedded)" },
  { prefix: "io", patches: IO_PATCHES, label: "I/O Schema (io)" },
  { prefix: "gateway-cli", patches: GATEWAY_CLI_PATCHES, label: "Gateway CLI (gateway-cli)" },
  { prefix: "session", patches: SESSION_PATCHES, label: "Session Manager (session)" },
  { prefix: "shell-env", patches: SHELL_ENV_PATCHES, label: "Shell Env Blacklist (shell-env)" },
  { prefix: "exec-approvals", patches: SAFE_BIN_PATCHES, label: "Safe-bin Allowlist (exec-approvals)" },
];

// Broader patches applied to all matching dist files
const BROAD_PATCHES = [
  ...SECURITY_GATE_PATCHES,
  ...CONFIG_FAILOPEN_PATCHES,
  ...WORKSPACE_PLUGIN_PATCHES,
  ...AUTH_PATCHES,
];

// Security gates apply to ALL discovered files
const SECURITY_PREFIXES = [
  "pi-embedded", "io", "gateway-cli", "session",
  "shell-env", "exec-approvals",
  "sandbox", "exec", "tool", "permission", "guard",
  "network", "ssrf", "approval", "restrict",
  "config", "plugin", "workspace",
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

  // TIER 1: Targeted file patches
  for (const target of FILE_TARGETS) {
    const filePath = resolveDistFile(distDir, target.prefix);
    if (!filePath) {
      allResults.push({
        file: target.prefix + "-*.js",
        label: target.label,
        found: false,
        results: [],
      });
      continue;
    }

    totalFiles++;
    let content = readFileSync(filePath, "utf-8");
    const originalContent = content;

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

  // TIER 2: Security gate patches — scan all JS files in dist
  const allDistFiles = existsSync(distDir) ? readdirSync(distDir).filter((f) => f.endsWith(".js")) : [];

  for (const fileName of allDistFiles) {
    const filePath = join(distDir, fileName);
    let content = readFileSync(filePath, "utf-8");
    const originalContent = content;

    const { content: patched, results } = applyPatches(content, BROAD_PATCHES, { verbose });
    const applied = results.filter((r) => r.applied).length;

    if (applied > 0) {
      if (!dryRun) {
        backupFile(filePath);
        writeFileSync(filePath, patched, "utf-8");
      }

      totalApplied += applied;
      totalSkipped += results.filter((r) => !r.applied).length;
      filesPatched++;
      totalFiles++;

      allResults.push({
        file: fileName,
        filePath,
        label: "Security Gates",
        found: true,
        applied,
        skipped: results.filter((r) => !r.applied).length,
        results: results.filter((r) => r.applied), // only show applied for brevity
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
  { name: "MAX_TOOL_RESULT_CHARS", before: "400,000", after: "2,000,000", file: "pi-embedded" },
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
  { name: "maxSpawnDepth", before: "5", after: "999", file: "io" },
  { name: "maxChildrenPerAgent", before: "20", after: "999", file: "io" },
  { name: "MAX_SESSION_HISTORY_LIMIT", before: "1,000", after: "10,000", file: "gateway-cli" },
  { name: "MAX_RESPONSE_SESSION_ENTRIES", before: "500", after: "5,000", file: "gateway-cli" },
  { name: "CONTROL_PLANE_RATE_LIMIT_MAX_REQUESTS", before: "3", after: "50", file: "gateway-cli" },
  { name: "CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES", before: "128 KB", after: "512 KB", file: "gateway-cli" },
  { name: "MAX_PAYLOAD_BYTES", before: "25 MB", after: "100 MB", file: "gateway-cli" },
  { name: "MAX_BUFFERED_BYTES", before: "50 MB", after: "200 MB", file: "gateway-cli" },
  { name: "_maxListeners", before: "100", after: "1,000", file: "session" },
  { name: "depthLimit", before: "5", after: "20", file: "session" },
  // V2 changelog additions
  { name: "DEFAULT_PARENT_FORK_MAX_TOKENS", before: "100,000", after: "200,000", file: "pi-embedded" },
  { name: "DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR", before: "20,000", after: "50,000", file: "pi-embedded" },
  { name: "MAX_QUALITY_GUARD_MAX_RETRIES", before: "3", after: "8", file: "pi-embedded" },
  { name: "MAX_TOOL_FAILURES", before: "8", after: "32", file: "pi-embedded" },
  { name: "MAX_RECENT_TURN_TEXT_CHARS", before: "600", after: "2,000", file: "pi-embedded" },
  { name: "MAX_BTW_SNAPSHOT_MESSAGES", before: "100", after: "500", file: "pi-embedded" },
  { name: "MAX_EXTRACTED_IDENTIFIERS", before: "12", after: "30", file: "pi-embedded" },
  { name: "DEFAULT_OPENAI_MAX_IMAGE_PARTS", before: "8", after: "20", file: "pi-embedded" },
  { name: "DEFAULT_OPENAI_MAX_TOTAL_IMAGE_BYTES", before: "20 MB", after: "50 MB", file: "pi-embedded" },
  { name: "DEFAULT_MAX_URL_PARTS", before: "8", after: "20", file: "pi-embedded" },
  { name: "DEFAULT_MAX_PDFS", before: "10", after: "30", file: "pi-embedded" },
  { name: "DEFAULT_MAX_PAGES", before: "20", after: "100", file: "pi-embedded" },
  { name: "DEFAULT_MAX_IMAGES", before: "20", after: "100", file: "pi-embedded" },
  { name: "MAX_PHOTOS_LIMIT", before: "20", after: "100", file: "pi-embedded" },
  { name: "MAX_INPUT_IMAGES", before: "5", after: "20", file: "pi-embedded" },
  { name: "MAX_RESTART_ATTEMPTS", before: "10", after: "30", file: "pi-embedded" },
  { name: "sigtermTimeoutMs", before: "700 ms", after: "5,000 ms", file: "pi-embedded" },
  // Env / security (non-numeric)
  { name: "blockedKeys (env vars)", before: "22 vars", after: "empty", file: "shell-env" },
  { name: "blockedOverrideKeys", before: "3 vars", after: "empty", file: "shell-env" },
  { name: "blockedPrefixes", before: "LD_/DYLD_/BASH_FUNC_", after: "empty", file: "shell-env" },
  { name: "safeBins (jq/sort/grep)", before: "removed", after: "restored", file: "exec-approvals" },
  { name: "memoryFlush tools", before: "read/write only", after: "all tools", file: "pi-embedded" },
  { name: "INVALID_CONFIG handling", before: "fail-closed", after: "fail-open", file: "gateway-cli" },
  { name: "workspacePlugins autoLoad", before: "disabled", after: "enabled", file: "pi-embedded" },
  { name: "auth mode 'none'", before: "rejected", after: "accepted", file: "gateway-cli" },
];
