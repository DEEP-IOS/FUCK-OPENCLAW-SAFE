#!/usr/bin/env node

/**
 * cli.js — FUCK-OPENCLAW-SAFE CLI entry point
 * Author: DEEP-IOS
 */

import { patchAll, unpatchAll, checkStatus, autoDetectOpenClaw, LIMIT_CATALOG } from "./patcher.js";
import { writeUnleashedConfig, auditConfig, FEATURE_CATALOG } from "./config-generator.js";

// ─── ANSI Colors ─────────────────────────────────────────────────

const c = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
};

const g = (t) => `${c.green}${t}${c.reset}`;
const r = (t) => `${c.red}${t}${c.reset}`;
const y = (t) => `${c.yellow}${t}${c.reset}`;
const b = (t) => `${c.blue}${t}${c.reset}`;
const m = (t) => `${c.magenta}${t}${c.reset}`;
const cy = (t) => `${c.cyan}${t}${c.reset}`;
const bold = (t) => `${c.bold}${t}${c.reset}`;
const dim = (t) => `${c.dim}${t}${c.reset}`;

// ─── Banner ──────────────────────────────────────────────────────

function showBanner() {
  console.log(`
${c.red}${c.bold}
    ███████╗██╗   ██╗ ██████╗██╗  ██╗
    ██╔════╝██║   ██║██╔════╝██║ ██╔╝
    █████╗  ██║   ██║██║     █████╔╝
    ██╔══╝  ██║   ██║██║     ██╔═██╗
    ██║     ╚██████╔╝╚██████╗██║  ██╗
    ╚═╝      ╚═════╝  ╚═════╝╚═╝  ╚═╝
${c.reset}
${c.yellow}${c.bold}    ╔═══════════════════════════════════════╗
    ║   OPENCLAW-SAFE  LIMIT  REMOVER       ║
    ║   by DEEP-IOS                         ║
    ╚═══════════════════════════════════════╝${c.reset}

    ${dim("Remove every artificial restriction.")}
    ${dim("Unleash the full power of OpenClaw.")}
`);
}

// ─── Helpers ─────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const flags = {};
  const positional = [];

  for (const arg of args) {
    if (arg === "--dry-run") flags.dryRun = true;
    else if (arg === "--verbose" || arg === "-v") flags.verbose = true;
    else if (arg === "--help" || arg === "-h") flags.help = true;
    else if (arg.startsWith("--openclaw-dir=")) flags.openclawDir = arg.split("=")[1];
    else if (arg.startsWith("--openclaw-dir")) flags.needsOpenclawDir = true;
    else if (flags.needsOpenclawDir) { flags.openclawDir = arg; delete flags.needsOpenclawDir; }
    else positional.push(arg);
  }

  return { command: positional[0] || null, flags };
}

function resolveOpenClawDir(flags) {
  if (flags.openclawDir) {
    return flags.openclawDir;
  }

  const detected = autoDetectOpenClaw();
  if (detected) {
    console.log(g("  [AUTO-DETECT]") + ` Found OpenClaw at: ${detected.openclawDir}`);
    console.log(dim(`  Dist directory: ${detected.distDir}`));
    return detected.openclawDir;
  }

  console.log(r("  [ERROR]") + " Could not auto-detect OpenClaw installation.");
  console.log(y("  Use --openclaw-dir=/path/to/openclaw to specify manually."));
  process.exit(1);
}

function padRight(str, len) {
  return str + " ".repeat(Math.max(0, len - str.length));
}

// ─── Commands ────────────────────────────────────────────────────

function showHelp() {
  showBanner();
  console.log(`${bold("USAGE:")}
  fuck-openclaw-safe <command> [options]

${bold("COMMANDS:")}
  ${g("patch")}       Apply all dist file patches (Tier 1 + Tier 2)
  ${g("config")}      Generate unleashed openclaw.json (Tier 3)
  ${g("full")}        Apply patches + generate config (recommended)
  ${g("status")}      Show current restriction status
  ${g("unpatch")}     Restore original dist files from backups

${bold("OPTIONS:")}
  ${cy("--openclaw-dir")}=PATH   Path to OpenClaw installation
  ${cy("--dry-run")}             Preview changes without writing
  ${cy("--verbose")} / ${cy("-v")}        Show detailed patch results
  ${cy("--help")} / ${cy("-h")}           Show this help

${bold("EXAMPLES:")}
  ${dim("$")} npx fuck-openclaw-safe full
  ${dim("$")} fuck-openclaw-safe patch --dry-run --verbose
  ${dim("$")} fuck-openclaw-safe config --openclaw-dir=E:/OpenClaw
  ${dim("$")} fuck-openclaw-safe unpatch
`);
}

function showMenu() {
  showBanner();
  console.log(`${bold("What would you like to do?")}

  ${g("1.")} ${bold("full")}     — Apply all patches + generate config ${y("(recommended)")}
  ${g("2.")} ${bold("patch")}    — Apply dist file patches only
  ${g("3.")} ${bold("config")}   — Generate unleashed config only
  ${g("4.")} ${bold("status")}   — Check current restriction status
  ${g("5.")} ${bold("unpatch")}  — Restore originals
  ${g("6.")} ${bold("help")}     — Show help

  ${dim("Usage: fuck-openclaw-safe <command>")}
  ${dim("Example: fuck-openclaw-safe full")}
`);
}

function cmdPatch(flags) {
  showBanner();
  const openclawDir = resolveOpenClawDir(flags);
  const dryRunLabel = flags.dryRun ? y(" [DRY RUN]") : "";

  console.log(bold(`\n  Patching OpenClaw dist files...${dryRunLabel}\n`));

  const result = patchAll(openclawDir, { dryRun: flags.dryRun, verbose: flags.verbose });

  if (!result.success) {
    console.log(r(`  [ERROR] ${result.error}`));
    process.exit(1);
  }

  // Show results table
  console.log(bold("  ┌─────────────────────────────────────────────────────────────┐"));
  console.log(bold("  │  PATCH RESULTS                                             │"));
  console.log(bold("  ├─────────────────────────────────────────────────────────────┤"));

  for (const detail of result.details) {
    if (!detail.found) {
      console.log(`  │  ${y("SKIP")} ${padRight(detail.label || detail.file, 40)} ${dim("not found")}`);
      continue;
    }

    const status = detail.applied > 0 ? g("DONE") : y("NONE");
    console.log(`  │  ${status} ${padRight(detail.label || detail.file, 40)} ${g(detail.applied + " applied")} / ${dim(detail.skipped + " skipped")}`);

    if (flags.verbose && detail.results) {
      for (const pr of detail.results) {
        const icon = pr.applied ? g("  +") : dim("  -");
        console.log(`  │    ${icon} ${pr.name}`);
      }
    }
  }

  console.log(bold("  └─────────────────────────────────────────────────────────────┘"));

  // Before/After table
  console.log(bold("\n  LIMIT CHANGES:"));
  console.log(`  ${dim(padRight("Constant", 44))} ${r(padRight("Before", 12))} ${g("After")}`);
  console.log(`  ${dim("─".repeat(70))}`);
  for (const item of LIMIT_CATALOG) {
    console.log(`  ${padRight(item.name, 44)} ${r(padRight(item.before, 12))} ${g(item.after)}`);
  }

  // Summary
  console.log(`\n  ${bold("SUMMARY:")}`);
  console.log(`  ${g("Files patched:")} ${result.filesPatched} / ${result.totalFiles}`);
  console.log(`  ${g("Patches applied:")} ${result.totalApplied}`);
  console.log(`  ${y("Patches skipped:")} ${result.totalSkipped} (version mismatch or already applied)`);
  if (flags.dryRun) console.log(`  ${y("(DRY RUN — no files were modified)")}`);
  console.log();
}

function cmdConfig(flags) {
  showBanner();
  const openclawDir = resolveOpenClawDir(flags);
  const dryRunLabel = flags.dryRun ? y(" [DRY RUN]") : "";

  console.log(bold(`\n  Generating unleashed config...${dryRunLabel}\n`));

  const result = writeUnleashedConfig(openclawDir, { dryRun: flags.dryRun });

  console.log(bold("  ┌─────────────────────────────────────────────────────────────┐"));
  console.log(bold("  │  CONFIG GENERATION RESULTS                                 │"));
  console.log(bold("  ├─────────────────────────────────────────────────────────────┤"));
  console.log(`  │  ${g("Config path:")} ${result.configPath}`);
  console.log(`  │  ${result.hadExisting ? y("Merged with existing config") : g("Created new config")}`);
  console.log(`  │  ${g("Features enabled:")} ${result.featureCount}`);
  console.log(bold("  └─────────────────────────────────────────────────────────────┘"));

  // Feature list
  console.log(bold("\n  ENABLED FEATURES:"));
  for (const feat of FEATURE_CATALOG) {
    console.log(`  ${g("  +")} ${padRight(feat.label, 28)} ${dim(feat.desc)}`);
  }

  if (flags.dryRun) {
    console.log(`\n  ${y("(DRY RUN — config not written)")}`);
    console.log(dim("\n  Preview:"));
    console.log(dim(result.json.split("\n").map((l) => "  " + l).join("\n")));
  }
  console.log();
}

function cmdFull(flags) {
  showBanner();
  const openclawDir = resolveOpenClawDir(flags);
  const dryRunLabel = flags.dryRun ? y(" [DRY RUN]") : "";

  console.log(bold(`\n  FULL UNLEASH MODE${dryRunLabel}\n`));
  console.log(dim("  Step 1/2: Patching dist files..."));

  const patchResult = patchAll(openclawDir, { dryRun: flags.dryRun, verbose: flags.verbose });

  if (!patchResult.success) {
    console.log(r(`  [ERROR] ${patchResult.error}`));
    process.exit(1);
  }

  console.log(g(`  Step 1/2 complete: ${patchResult.totalApplied} patches applied across ${patchResult.filesPatched} files`));

  console.log(dim("\n  Step 2/2: Generating unleashed config..."));

  const configResult = writeUnleashedConfig(openclawDir, { dryRun: flags.dryRun });

  console.log(g(`  Step 2/2 complete: ${configResult.featureCount} features enabled`));

  // Combined summary
  console.log(bold("\n  ┌─────────────────────────────────────────────────────────────┐"));
  console.log(bold("  │  FULL UNLEASH COMPLETE                                     │"));
  console.log(bold("  ├─────────────────────────────────────────────────────────────┤"));
  console.log(`  │  ${g("Patches applied:")}  ${patchResult.totalApplied}`);
  console.log(`  │  ${g("Files patched:")}    ${patchResult.filesPatched}`);
  console.log(`  │  ${g("Features enabled:")} ${configResult.featureCount}`);
  console.log(`  │  ${g("Config path:")}      ${configResult.configPath}`);
  console.log(`  │  ${y("Skipped:")}          ${patchResult.totalSkipped} (version mismatch)`);
  console.log(bold("  └─────────────────────────────────────────────────────────────┘"));

  // Show limit table
  console.log(bold("\n  ALL LIMITS — BEFORE vs AFTER:"));
  console.log(`  ${dim(padRight("Constant", 44))} ${r(padRight("Before", 12))} ${g("After")}`);
  console.log(`  ${dim("─".repeat(70))}`);
  for (const item of LIMIT_CATALOG) {
    console.log(`  ${padRight(item.name, 44)} ${r(padRight(item.before, 12))} ${g(item.after)}`);
  }

  if (flags.dryRun) console.log(`\n  ${y("(DRY RUN — nothing was modified)")}`);
  console.log(`\n  ${g(bold("OpenClaw is now unleashed. Restart to apply changes."))}\n`);
}

function cmdStatus(flags) {
  showBanner();
  const openclawDir = resolveOpenClawDir(flags);

  console.log(bold("\n  RESTRICTION STATUS\n"));

  // Check patch status
  const status = checkStatus(openclawDir);

  if (!status.found) {
    console.log(r(`  [ERROR] ${status.error}`));
    process.exit(1);
  }

  console.log(bold("  DIST FILES:"));
  console.log(`  ${dim("Directory:")} ${status.distDir}`);
  console.log(`  ${dim("JS files:")}  ${status.totalJsFiles}`);
  console.log(`  ${dim("Backups:")}   ${status.totalBackups}`);
  console.log(`  ${dim("Status:")}    ${status.isPatched ? g("PATCHED") : r("RESTRICTED")}`);
  console.log();

  for (const t of status.targets) {
    const icon = !t.found ? dim("?") : t.patched ? g("+") : r("-");
    const label = !t.found ? dim("not found") : t.patched ? g("patched") : r("restricted");
    console.log(`  ${icon} ${padRight(t.label, 35)} ${label} ${dim(t.file || "")}`);
  }

  // Check config status
  console.log(bold("\n  CONFIG FEATURES:"));
  const audit = auditConfig(openclawDir);
  console.log(`  ${dim("Config:")} ${audit.exists ? audit.configPath : r("not found")}`);
  console.log();

  let enabled = 0;
  let disabled = 0;
  for (const feat of audit.features) {
    const icon = feat.enabled ? g("+") : r("-");
    const label = feat.enabled ? g("enabled") : r("disabled");
    if (feat.enabled) enabled++;
    else disabled++;
    console.log(`  ${icon} ${padRight(feat.label, 28)} ${label}`);
  }

  console.log(`\n  ${bold("Config score:")} ${g(enabled)}/${enabled + disabled} features enabled`);

  // Overall
  const patchScore = status.isPatched ? "PATCHED" : "RESTRICTED";
  const overallColor = status.isPatched && enabled > disabled / 2 ? g : r;
  console.log(`\n  ${bold("Overall:")} ${overallColor(patchScore + " + " + enabled + "/" + (enabled + disabled) + " features")}\n`);
}

function cmdUnpatch(flags) {
  showBanner();
  const openclawDir = resolveOpenClawDir(flags);

  console.log(bold("\n  Restoring original files...\n"));

  const result = unpatchAll(openclawDir);

  if (!result.success) {
    console.log(r(`  [ERROR] ${result.error}`));
    process.exit(1);
  }

  if (result.restored === 0) {
    console.log(y("  No backups found. Nothing to restore."));
  } else {
    console.log(g(`  Restored ${result.restored} file(s) to original state.`));
    console.log(dim(`  Directory: ${result.distDir}`));
  }
  console.log();
}

// ─── Main ────────────────────────────────────────────────────────

const { command, flags } = parseArgs();

if (flags.help) {
  showHelp();
  process.exit(0);
}

switch (command) {
  case "patch":
    cmdPatch(flags);
    break;
  case "config":
    cmdConfig(flags);
    break;
  case "full":
    cmdFull(flags);
    break;
  case "status":
    cmdStatus(flags);
    break;
  case "unpatch":
    cmdUnpatch(flags);
    break;
  case null:
    showMenu();
    break;
  default:
    console.log(r(`  Unknown command: ${command}`));
    showHelp();
    process.exit(1);
}
