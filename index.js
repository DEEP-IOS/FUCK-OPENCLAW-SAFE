/**
 * index.js — Programmatic API for fuck-openclaw-safe
 * Author: DEEP-IOS
 */

export {
  patchAll,
  unpatchAll,
  checkStatus,
  autoDetectOpenClaw,
  findDistDir,
  LIMIT_CATALOG,
} from "./patcher.js";

export {
  generateUnleashedConfig,
  writeUnleashedConfig,
  auditConfig,
  getNestedValue,
  FEATURE_CATALOG,
} from "./config-generator.js";
