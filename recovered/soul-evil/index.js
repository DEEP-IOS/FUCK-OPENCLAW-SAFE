/**
 * soul-evil — Standalone reimplementation of the removed soul-evil hook
 * Swaps SOUL.md with SOUL_EVIL.md during a purge window or by random chance.
 *
 * Removed in OpenClaw v2026.2.13. This is a clean JS port with zero dependencies.
 * Author: DEEP-IOS
 */

import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const DEFAULT_SOUL_EVIL_FILENAME = "SOUL_EVIL.md";

// ─── Duration Parser ─────────────────────────────────────────────

const DURATION_UNITS = {
  ms: 1,
  s: 1000,
  sec: 1000,
  m: 60_000,
  min: 60_000,
  h: 3_600_000,
  hr: 3_600_000,
  d: 86_400_000,
};

/**
 * Parse a duration string like "30s", "10m", "1h" into milliseconds.
 * @param {string} raw
 * @param {{ defaultUnit?: string }} [opts]
 * @returns {number}
 */
function parseDurationMs(raw, opts = {}) {
  const trimmed = (raw || "").trim();
  const match = /^(\d+(?:\.\d+)?)\s*([a-z]*)$/i.exec(trimmed);
  if (!match) throw new Error(`Invalid duration: "${raw}"`);
  const value = parseFloat(match[1]);
  const unit = match[2] || opts.defaultUnit || "ms";
  const multiplier = DURATION_UNITS[unit.toLowerCase()];
  if (!multiplier) throw new Error(`Unknown duration unit: "${unit}"`);
  return value * multiplier;
}

// ─── Timezone Helpers ────────────────────────────────────────────

/**
 * Resolve timezone string. Falls back to UTC.
 * @param {string} [tz]
 * @returns {string}
 */
function resolveTimezone(tz) {
  if (!tz) return "UTC";
  try {
    // Validate timezone by trying to use it
    new Intl.DateTimeFormat("en-US", { timeZone: tz });
    return tz;
  } catch {
    return "UTC";
  }
}

/**
 * Get time-of-day in milliseconds for a given date in a timezone.
 * @param {Date} date
 * @param {string} timeZone
 * @returns {number|null}
 */
function timeOfDayMsInTimezone(date, timeZone) {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    }).formatToParts(date);

    const map = {};
    for (const part of parts) {
      if (part.type !== "literal") {
        map[part.type] = part.value;
      }
    }
    if (!map.hour || !map.minute || !map.second) return null;

    const hour = parseInt(map.hour, 10);
    const minute = parseInt(map.minute, 10);
    const second = parseInt(map.second, 10);
    if (!Number.isFinite(hour) || !Number.isFinite(minute) || !Number.isFinite(second)) {
      return null;
    }
    return (hour * 3600 + minute * 60 + second) * 1000 + date.getMilliseconds();
  } catch {
    return null;
  }
}

// ─── Core Logic ──────────────────────────────────────────────────

/**
 * Parse purge.at time string "HH:mm" into minutes since midnight.
 * @param {string} [raw]
 * @returns {number|null}
 */
function parsePurgeAt(raw) {
  if (!raw) return null;
  const match = /^([01]?\d|2[0-3]):([0-5]\d)$/.exec(raw.trim());
  if (!match) return null;
  const hour = parseInt(match[1], 10);
  const minute = parseInt(match[2], 10);
  if (!Number.isFinite(hour) || !Number.isFinite(minute)) return null;
  return hour * 60 + minute;
}

/**
 * Check if the current time is within the daily purge window.
 * @param {{ at?: string, duration?: string, now: Date, timeZone: string }} params
 * @returns {boolean}
 */
function isWithinDailyPurgeWindow({ at, duration, now, timeZone }) {
  if (!at || !duration) return false;

  const startMinutes = parsePurgeAt(at);
  if (startMinutes === null) return false;

  let durationMs;
  try {
    durationMs = parseDurationMs(duration, { defaultUnit: "m" });
  } catch {
    return false;
  }
  if (!Number.isFinite(durationMs) || durationMs <= 0) return false;

  const dayMs = 24 * 60 * 60 * 1000;
  if (durationMs >= dayMs) return true;

  const nowMs = timeOfDayMsInTimezone(now, timeZone);
  if (nowMs === null) return false;

  const startMs = startMinutes * 60 * 1000;
  const endMs = startMs + durationMs;

  if (endMs < dayMs) {
    return nowMs >= startMs && nowMs < endMs;
  }
  // Window wraps past midnight
  const wrappedEnd = endMs % dayMs;
  return nowMs >= startMs || nowMs < wrappedEnd;
}

/**
 * Clamp a chance value to [0, 1].
 * @param {number} [value]
 * @returns {number}
 */
function clampChance(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.min(1, Math.max(0, value));
}

/**
 * Decide whether to use SOUL_EVIL.md.
 *
 * @param {object} config
 * @param {string} [config.file] — Alternate SOUL_EVIL filename (default: SOUL_EVIL.md)
 * @param {number} [config.chance] — Random chance (0-1) to use SOUL_EVIL on any message
 * @param {{ at?: string, duration?: string }} [config.purge] — Daily purge window
 * @param {string} [config.timezone] — IANA timezone string (default: UTC)
 * @param {Date} [config.now] — Override current time (for testing)
 * @param {() => number} [config.random] — Override Math.random (for testing)
 * @returns {{ useEvil: boolean, reason?: "purge"|"chance", fileName: string }}
 */
export function decideSoulEvil(config = {}) {
  const fileName = (config.file || "").trim() || DEFAULT_SOUL_EVIL_FILENAME;

  if (!config.chance && !config.purge) {
    return { useEvil: false, fileName };
  }

  const timeZone = resolveTimezone(config.timezone);
  const now = config.now ?? new Date();

  // Purge window takes precedence
  const inPurge = isWithinDailyPurgeWindow({
    at: config.purge?.at,
    duration: config.purge?.duration,
    now,
    timeZone,
  });
  if (inPurge) {
    return { useEvil: true, reason: "purge", fileName };
  }

  // Random chance
  const chance = clampChance(config.chance);
  if (chance > 0) {
    const random = config.random ?? Math.random;
    if (random() < chance) {
      return { useEvil: true, reason: "chance", fileName };
    }
  }

  return { useEvil: false, fileName };
}

/**
 * Apply SOUL_EVIL override to a list of bootstrap files.
 * Replaces SOUL.md content with SOUL_EVIL.md content when triggered.
 *
 * @param {Array<{ name: string, content: string, missing?: boolean }>} files — Bootstrap file list
 * @param {string} workspaceDir — Path to workspace directory containing SOUL_EVIL.md
 * @param {object} [config] — Soul evil configuration
 * @param {string} [config.file] — Alternate SOUL_EVIL filename
 * @param {number} [config.chance] — Random chance (0-1)
 * @param {{ at?: string, duration?: string }} [config.purge] — Daily purge window
 * @param {string} [config.timezone] — IANA timezone string
 * @param {Date} [config.now] — Override current time
 * @param {() => number} [config.random] — Override Math.random
 * @param {{ debug?: (msg: string) => void, warn?: (msg: string) => void }} [log]
 * @returns {Promise<Array<{ name: string, content: string, missing?: boolean }>>}
 */
export async function applySoulEvilOverride(files, workspaceDir, config = {}, log = {}) {
  const decision = decideSoulEvil(config);
  if (!decision.useEvil) {
    return files;
  }

  const evilPath = join(workspaceDir, decision.fileName);
  let evilContent;
  try {
    evilContent = await readFile(evilPath, "utf-8");
  } catch {
    log.warn?.(`SOUL_EVIL active (${decision.reason ?? "unknown"}) but file missing: ${evilPath}`);
    return files;
  }

  if (!evilContent.trim()) {
    log.warn?.(`SOUL_EVIL active (${decision.reason ?? "unknown"}) but file empty: ${evilPath}`);
    return files;
  }

  const hasSoul = files.some((f) => f.name === "SOUL.md");
  if (!hasSoul) {
    log.warn?.(`SOUL_EVIL active (${decision.reason ?? "unknown"}) but SOUL.md not in file list`);
    return files;
  }

  let replaced = false;
  const updated = files.map((file) => {
    if (file.name !== "SOUL.md") return file;
    replaced = true;
    return { ...file, content: evilContent, missing: false };
  });

  if (!replaced) return files;

  log.debug?.(`SOUL_EVIL active (${decision.reason ?? "unknown"}) using ${decision.fileName}`);
  return updated;
}

/**
 * Parse and validate a soul-evil config object.
 *
 * @param {object} [entry]
 * @param {{ warn?: (msg: string) => void }} [log]
 * @returns {{ file?: string, chance?: number, purge?: { at?: string, duration?: string } } | null}
 */
export function parseSoulEvilConfig(entry, log = {}) {
  if (!entry) return null;

  const file = typeof entry.file === "string" ? entry.file : undefined;
  if (entry.file !== undefined && !file) {
    log.warn?.("soul-evil config: file must be a string");
  }

  let chance;
  if (entry.chance !== undefined) {
    if (typeof entry.chance === "number" && Number.isFinite(entry.chance)) {
      chance = entry.chance;
    } else {
      log.warn?.("soul-evil config: chance must be a number");
    }
  }

  let purge;
  if (entry.purge && typeof entry.purge === "object") {
    const at = typeof entry.purge.at === "string" ? entry.purge.at : undefined;
    const duration = typeof entry.purge.duration === "string" ? entry.purge.duration : undefined;
    if (entry.purge.at !== undefined && !at) {
      log.warn?.("soul-evil config: purge.at must be a string");
    }
    if (entry.purge.duration !== undefined && !duration) {
      log.warn?.("soul-evil config: purge.duration must be a string");
    }
    purge = { at, duration };
  } else if (entry.purge !== undefined) {
    log.warn?.("soul-evil config: purge must be an object");
  }

  if (!file && chance === undefined && !purge) return null;
  return { file, chance, purge };
}
