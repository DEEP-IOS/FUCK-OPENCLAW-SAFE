/**
 * config-generator.js — Generate optimal openclaw.json enabling all disabled features
 * Author: DEEP-IOS
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

/**
 * All 60+ disabled features, fully unlocked.
 */
export function generateUnleashedConfig() {
  return {
    // DM and group policy
    dmPolicy: "open",
    groupPolicy: "open",

    // Commands
    commands: {
      bash: true,
      config: true,
      mcp: true,
      plugins: true,
      debug: true,
      restart: true,
    },

    // Session
    session: { dmScope: "main" },

    // Auth / Gateway
    gateway: {
      controlUi: { allowInsecureAuth: true },
      http: { endpoints: { chatCompletions: { enabled: true } } },
      tools: { allow: ["sessions_spawn", "sessions_send", "gateway", "whatsapp_login"] },
    },

    // Hooks
    hooks: { enabled: true, allowRequestSessionKey: true },

    // Memory
    memory: {
      qmd: {
        sessions: { enabled: true },
        scope: { default: "allow" },
      },
      autoCapture: true,
    },

    // Agents
    agents: {
      defaults: {
        sandbox: { sessionToolsVisibility: "all" },
        memorySearch: {
          experimental: { sessionMemory: true },
          multimodal: { enabled: true },
        },
      },
    },

    // Channels — all open
    channels: {
      defaults: { groupPolicy: "open" },
      discord: {
        allowBots: true,
        intents: { presence: true, guildMembers: true },
        threadBindings: { spawnSubagentSessions: true, spawnAcpSessions: true },
      },
      slack: { allowBots: true },
      matrix: { allowBots: true },
      telegram: { requireMention: false },
    },

    // ACP
    acp: { enabled: true, dispatch: { enabled: true } },

    // Tools
    tools: {
      agentToAgent: { enabled: true },
      sessions: { visibility: "all" },
      elevated: { enabled: true },
      message: { crossContext: { allowAcrossProviders: true } },
      exec: { applyPatch: { enabled: true }, host: "host" },
      loopDetection: { enabled: true, historySize: 50 },
      web: { fetch: { firecrawl: { enabled: true } } },
      fs: { workspaceOnly: false },
    },

    // Canvas + Browser
    canvasHost: { enabled: true },
    nodeHost: { browserProxy: { enabled: true } },
    browser: { ssrfPolicy: { dangerouslyAllowPrivateNetwork: true } },

    // Plugins
    plugins: { workspace: { autoLoad: true }, entries: {} },

    // Update
    update: { auto: { enabled: true } },

    // Approvals
    approvals: { exec: { enabled: true } },
  };
}

/**
 * List of all features with descriptions for status display.
 */
export const FEATURE_CATALOG = [
  // Policies
  { key: "dmPolicy", label: "DM Policy", desc: "Direct message policy (open)" },
  { key: "groupPolicy", label: "Group Policy", desc: "Group chat policy (open)" },
  // Commands
  { key: "commands.bash", label: "Bash Command", desc: "Shell command access" },
  { key: "commands.config", label: "Config Command", desc: "Runtime config editing" },
  { key: "commands.mcp", label: "MCP Command", desc: "Model Context Protocol" },
  { key: "commands.plugins", label: "Plugins Command", desc: "Plugin management" },
  { key: "commands.debug", label: "Debug Command", desc: "Debug utilities" },
  { key: "commands.restart", label: "Restart Command", desc: "Runtime restart" },
  // Session
  { key: "session.dmScope", label: "DM Scope", desc: "Session DM scope (main)" },
  // Gateway
  { key: "gateway.controlUi.allowInsecureAuth", label: "Insecure Auth", desc: "Allow insecure control UI auth" },
  { key: "gateway.http.endpoints.chatCompletions.enabled", label: "Chat Completions API", desc: "HTTP gateway endpoint" },
  { key: "gateway.tools.allow", label: "Gateway Tools", desc: "Allowed gateway tool list" },
  // Hooks
  { key: "hooks.enabled", label: "Hooks", desc: "Lifecycle hooks" },
  { key: "hooks.allowRequestSessionKey", label: "Hook Session Key", desc: "Allow hooks to request session key" },
  // Memory
  { key: "memory.qmd.sessions.enabled", label: "QMD Sessions", desc: "Session-scoped memory" },
  { key: "memory.qmd.scope.default", label: "QMD Scope", desc: "Memory scope default" },
  { key: "memory.autoCapture", label: "Auto Capture", desc: "Automatic memory capture" },
  // Agents
  { key: "agents.defaults.sandbox.sessionToolsVisibility", label: "Sandbox Visibility", desc: "Sandboxed tool visibility" },
  { key: "agents.defaults.memorySearch.experimental.sessionMemory", label: "Session Memory Search", desc: "Experimental memory search" },
  { key: "agents.defaults.memorySearch.multimodal.enabled", label: "Multimodal Search", desc: "Multimodal memory search" },
  // Channels
  { key: "channels.defaults.groupPolicy", label: "Channel Group Policy", desc: "Default channel group policy" },
  { key: "channels.discord.allowBots", label: "Discord Bots", desc: "Discord bot integration" },
  { key: "channels.discord.intents.presence", label: "Discord Presence", desc: "Presence intent" },
  { key: "channels.discord.intents.guildMembers", label: "Discord Members", desc: "Guild members intent" },
  { key: "channels.discord.threadBindings.spawnSubagentSessions", label: "Discord Subagents", desc: "Spawn subagent sessions in threads" },
  { key: "channels.discord.threadBindings.spawnAcpSessions", label: "Discord ACP Sessions", desc: "Spawn ACP sessions in threads" },
  { key: "channels.slack.allowBots", label: "Slack Bots", desc: "Slack bot integration" },
  { key: "channels.matrix.allowBots", label: "Matrix Bots", desc: "Matrix bot integration" },
  { key: "channels.telegram.requireMention", label: "Telegram No-Mention", desc: "Respond without @mention" },
  // ACP
  { key: "acp.enabled", label: "ACP Protocol", desc: "Agent Communication Protocol" },
  { key: "acp.dispatch.enabled", label: "ACP Dispatch", desc: "Dispatch subsystem" },
  // Tools
  { key: "tools.agentToAgent.enabled", label: "Agent-to-Agent", desc: "Direct inter-agent messaging" },
  { key: "tools.sessions.visibility", label: "Session Visibility", desc: "Cross-session tool access" },
  { key: "tools.elevated.enabled", label: "Elevated Tools", desc: "Privileged tool access" },
  { key: "tools.message.crossContext.allowAcrossProviders", label: "Cross-Provider Messaging", desc: "Messages across providers" },
  { key: "tools.exec.applyPatch.enabled", label: "Exec ApplyPatch", desc: "Patch application via exec" },
  { key: "tools.exec.host", label: "Exec Host Mode", desc: "Run exec on host (not sandbox)" },
  { key: "tools.loopDetection.enabled", label: "Loop Detection", desc: "Infinite loop protection" },
  { key: "tools.web.fetch.firecrawl.enabled", label: "Firecrawl", desc: "Advanced web crawling" },
  { key: "tools.fs.workspaceOnly", label: "FS Unrestricted", desc: "Allow FS outside workspace" },
  // Canvas + Browser
  { key: "canvasHost.enabled", label: "Canvas Host", desc: "Canvas rendering host" },
  { key: "nodeHost.browserProxy.enabled", label: "Browser Proxy", desc: "Node browser proxy" },
  { key: "browser.ssrfPolicy.dangerouslyAllowPrivateNetwork", label: "Private Network Access", desc: "Allow private network in browser" },
  // Plugins
  { key: "plugins.workspace.autoLoad", label: "Workspace Plugin AutoLoad", desc: "Auto-load workspace plugins" },
  { key: "plugins.entries", label: "Plugin Entries", desc: "Dynamic plugin registry" },
  // Update
  { key: "update.auto.enabled", label: "Auto Update", desc: "Automatic updates" },
  // Approvals
  { key: "approvals.exec.enabled", label: "Exec Approvals", desc: "Auto-approve exec" },
];

/**
 * Deep merge b into a (a is mutated).
 */
function deepMerge(a, b) {
  for (const key of Object.keys(b)) {
    if (
      a[key] &&
      typeof a[key] === "object" &&
      !Array.isArray(a[key]) &&
      typeof b[key] === "object" &&
      !Array.isArray(b[key])
    ) {
      deepMerge(a[key], b[key]);
    } else {
      a[key] = b[key];
    }
  }
  return a;
}

/**
 * Read a nested key like "tools.sessions.visibility" from an object.
 */
export function getNestedValue(obj, keyPath) {
  const parts = keyPath.split(".");
  let cur = obj;
  for (const p of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = cur[p];
  }
  return cur;
}

/**
 * Generate config and write to disk, merging with existing if present.
 */
export function writeUnleashedConfig(openclawDir, { dryRun = false } = {}) {
  const configPath = join(openclawDir, "openclaw.json");
  const unleashed = generateUnleashedConfig();
  let existing = {};
  let hadExisting = false;

  if (existsSync(configPath)) {
    try {
      existing = JSON.parse(readFileSync(configPath, "utf-8"));
      hadExisting = true;
    } catch {
      // corrupted — overwrite
    }
  }

  const merged = deepMerge(existing, unleashed);
  const output = JSON.stringify(merged, null, 2);

  if (!dryRun) {
    writeFileSync(configPath, output, "utf-8");
  }

  return {
    configPath,
    hadExisting,
    featureCount: FEATURE_CATALOG.length,
    config: merged,
    json: output,
  };
}

/**
 * Check which features are currently enabled/disabled in existing config.
 */
export function auditConfig(openclawDir) {
  const configPath = join(openclawDir, "openclaw.json");
  const unleashed = generateUnleashedConfig();
  let existing = {};

  if (existsSync(configPath)) {
    try {
      existing = JSON.parse(readFileSync(configPath, "utf-8"));
    } catch {
      // corrupted
    }
  }

  const results = [];
  for (const feat of FEATURE_CATALOG) {
    const expected = getNestedValue(unleashed, feat.key);
    const actual = getNestedValue(existing, feat.key);
    const enabled =
      actual !== undefined &&
      (typeof expected === "boolean"
        ? actual === expected
        : typeof expected === "string"
          ? actual === expected
          : actual != null);
    results.push({ ...feat, expected, actual, enabled });
  }

  return { configPath, exists: existsSync(configPath), features: results };
}
