# FUCK-OPENCLAW-SAFE

**Remove every artificial restriction in OpenClaw. Safely. Reversibly.**

By **DEEP-IOS**

---

> OpenClaw ships with 280+ artificial limits baked into its dist files and config schema.
> Tiny context windows. Crippled retry counts. Sandbox walls. Rate limit gates.
> Env var blacklists. Safe-bin removals. Fail-closed configs. Plugin lockdowns.
> This tool removes **all of them** in one command.

## Sound Familiar? / 你是不是也遇到了这些问题？

| What you experience | Root cause | What we fix |
|---|---|---|
| "Agent stops halfway through complex tasks" | `MAX_RUN_RETRY = 160` — agent gives up after 160 iterations | → **2,000** |
| "Sub-agents can't do anything useful" | `SUBAGENT_TOOL_DENY` blocks spawn/session/gateway tools | → **empty deny list** |
| "Multi-agent feels like single-agent" | A2A disabled + `visibility = tree` + `PING_PONG = 5` | → **A2A on, visibility=all, 200 turns** |
| "Can't read large files properly" | `READ_PAGE = 50KB`, whole file gets truncated | → **512KB** |
| "Responses always get cut off" | `DEFAULT_MAX_TOKENS = 4096` output cap | → **16,384** |
| "Why does it keep asking me to confirm commands?" | `jq`/`sort`/`grep` removed from safe-bin + exec=allowlist | → **restored + host mode** |
| "Context window feels tiny" | `DEFAULT_CONTEXT_WINDOW = 32,000` — far below model capacity | → **200,000** |
| "Long tasks just timeout and die" | `JOB_TTL = 3 hours` hard ceiling | → **24 hours** |
| "Agent can't spawn more than 5 sub-agents" | `maxChildrenPerAgent = 5` (default), Zod `.max(20)` (hard wall) | → **999** |
| "Sub-agents are completely flat, no nesting" | `maxSpawnDepth = 1` — one level only | → **999** |
| "Tool results are truncated" | `HARD_MAX_TOOL_RESULT_CHARS = 400K` | → **2,000,000** |
| "Project bootstrap loads almost nothing" | `DEFAULT_BOOTSTRAP_MAX_CHARS = 20K` | → **200,000** |
| "Compaction loses too much context" | `MAX_RECENT_TURNS_PRESERVE = 12`, `DEFAULT = 3` | → **48 / 8** |
| "Agent conversations are too short" | `MAX_PING_PONG_TURNS = 5` — 5 rounds then forced stop | → **200** |
| "Commands run one at a time, painfully slow" | `maxConcurrent = 1` on command lane | → **unlocked** |

**用户体感 → 根因 对照表：**

| 你遇到的问题 | 根本原因 | 修复后 |
|---|---|---|
| "Agent 做到一半就停了" | `MAX_RUN_RETRY = 160`，循环 160 次就放弃 | → **2,000** |
| "子 Agent 什么也做不了" | `SUBAGENT_TOOL_DENY` 禁止了 spawn/session/gateway 工具 | → **清空禁止列表** |
| "多 Agent 协作像单兵作战" | A2A 关闭 + 只能看自己的会话树 + 对话 5 轮截断 | → **A2A 开启，全局可见，200 轮** |
| "大文件读不全" | `READ_PAGE = 50KB`，整个文件被截断 | → **512KB** |
| "回答总是被截断" | `DEFAULT_MAX_TOKENS = 4096` 输出上限 | → **16,384** |
| "命令行工具总要我确认" | `jq`/`sort`/`grep` 被移出安全白名单 + exec=allowlist | → **恢复 + host 模式** |
| "上下文窗口感觉很小" | `DEFAULT_CONTEXT_WINDOW = 32,000`，远低于模型实际能力 | → **200,000** |
| "长任务直接超时" | `JOB_TTL = 3 小时` 硬上限 | → **24 小时** |
| "最多只能开 5 个子 Agent" | `maxChildrenPerAgent = 5`（默认），Zod `.max(20)`（硬墙） | → **999** |
| "子 Agent 完全扁平，不能嵌套" | `maxSpawnDepth = 1` — 只允许一层 | → **999** |
| "工具返回结果被截断" | `HARD_MAX_TOOL_RESULT_CHARS = 400K` | → **2,000,000** |
| "项目启动加载几乎为零" | `DEFAULT_BOOTSTRAP_MAX_CHARS = 20K` | → **200,000** |
| "压缩后上下文丢太多" | `MAX_RECENT_TURNS_PRESERVE = 12`，`DEFAULT = 3` | → **48 / 8** |
| "Agent 对话太短" | `MAX_PING_PONG_TURNS = 5`，5 轮强制截断 | → **200** |
| "命令串行执行，一个个来，慢" | `maxConcurrent = 1` 命令通道 | → **解锁** |

Every single one of these is a hardcoded value that OpenClaw's team intentionally set. Your hardware. Your API keys. Your rules.

每一条都是 OpenClaw 团队故意设定的硬编码值。你的硬件。你的 API key。你的规则。

## Quick Start

```bash
npx fuck-openclaw-safe full
```

That's it. All 280+ restrictions gone. Restart OpenClaw and enjoy the full power.

## What It Does

**Two modes. One goal: total freedom.**

### Mode 1: `patch` — Rewrite dist files

Directly patches the compiled JS files in OpenClaw's `dist/` directory. Targets hardcoded constants, env var blacklists, safe-bin removals, fail-closed configs, and security gates that cannot be changed via config.

### Mode 2: `config` — Generate optimal config

Creates/merges `openclaw.json` with all 48 disabled features enabled. No file hacking needed for these — just the right config keys.

### Mode 3: `full` — Both at once (recommended)

```bash
fuck-openclaw-safe full
```

## Commands

| Command | Description |
|---------|-------------|
| `fuck-openclaw-safe` | Show interactive menu |
| `fuck-openclaw-safe patch` | Apply all dist patches |
| `fuck-openclaw-safe config` | Generate unleashed config |
| `fuck-openclaw-safe full` | Both patch + config |
| `fuck-openclaw-safe status` | Show current restriction status |
| `fuck-openclaw-safe unpatch` | Restore originals from backup |
| `fuck-openclaw-safe --help` | Show help |

### Flags

| Flag | Description |
|------|-------------|
| `--openclaw-dir=PATH` | Path to OpenClaw installation |
| `--dry-run` | Preview changes without writing |
| `--verbose` / `-v` | Show detailed patch results |

## Before / After — All 56 Limits

| Constant | Before | After | File |
|----------|--------|-------|------|
| MAX_RUN_RETRY_ITERATIONS | 160 | 2,000 | pi-embedded |
| MAX_PING_PONG_TURNS | 5 | 200 | pi-embedded |
| DEFAULT_PING_PONG_TURNS | 5 | 200 | pi-embedded |
| DEFAULT_CONTEXT_WINDOW | 32,000 | 200,000 | pi-embedded |
| DEFAULT_MAX_TOKENS | 4,096 | 16,384 | pi-embedded |
| HARD_MAX_TOOL_RESULT_CHARS | 400,000 | 2,000,000 | pi-embedded |
| MAX_TOOL_RESULT_CHARS | 400,000 | 2,000,000 | pi-embedded |
| MAX_OBSERVATION_INPUT_CHARS | 64,000 | 256,000 | pi-embedded |
| MAX_COMPACTION_SUMMARY_CHARS | 16,000 | 64,000 | pi-embedded |
| MAX_OVERFLOW_COMPACTION_ATTEMPTS | 3 | 10 | pi-embedded |
| MAX_RECENT_TURNS_PRESERVE | 12 | 48 | pi-embedded |
| DEFAULT_RECENT_TURNS_PRESERVE | 3 | 8 | pi-embedded |
| DEFAULT_BOOTSTRAP_MAX_CHARS | 20,000 | 200,000 | pi-embedded |
| DEFAULT_READ_PAGE_MAX_BYTES | 50 KB | 512 KB | pi-embedded |
| MAX_ADAPTIVE_READ_MAX_BYTES | 512 KB | 2 MB | pi-embedded |
| MAX_ADAPTIVE_READ_PAGES | 8 | 64 | pi-embedded |
| MAX_JOB_TTL_MS | 3 hours | 24 hours | pi-embedded |
| DEFAULT_JOB_TTL_MS | 30 min | 2 hours | pi-embedded |
| DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS | 90 sec | 10 min | pi-embedded |
| MAX_ANNOUNCE_RETRY_COUNT | 3 | 20 | pi-embedded |
| DEFAULT_SEARCH_COUNT | 5 | 15 | pi-embedded |
| DEFAULT_QUEUE_CAP | 20 | 100 | pi-embedded |
| FROZEN_RESULT_TEXT_MAX_BYTES | 100 KB | 512 KB | pi-embedded |
| SESSIONS_HISTORY_MAX_BYTES | 80 KB | 512 KB | pi-embedded |
| LAST_MSG_MAX_BYTES | 16 KB | 64 KB | pi-embedded |
| MAX_STEER_MESSAGE_CHARS | 4,000 | 16,000 | pi-embedded |
| MAX_CONTEXT_CHARS | 3,000 | 16,000 | pi-embedded |
| MAX_SUMMARY_CONTEXT_CHARS | 2,000 | 8,000 | pi-embedded |
| MAX_INSTRUCTION_LENGTH | 800 | 4,000 | pi-embedded |
| DEFAULT_PARENT_FORK_MAX_TOKENS | 100,000 | 200,000 | pi-embedded |
| DEFAULT_PI_COMPACTION_RESERVE_TOKENS_FLOOR | 20,000 | 50,000 | pi-embedded |
| MAX_QUALITY_GUARD_MAX_RETRIES | 3 | 8 | pi-embedded |
| MAX_TOOL_FAILURES | 8 | 32 | pi-embedded |
| MAX_RECENT_TURN_TEXT_CHARS | 600 | 2,000 | pi-embedded |
| MAX_BTW_SNAPSHOT_MESSAGES | 100 | 500 | pi-embedded |
| MAX_EXTRACTED_IDENTIFIERS | 12 | 30 | pi-embedded |
| DEFAULT_OPENAI_MAX_IMAGE_PARTS | 8 | 20 | pi-embedded |
| DEFAULT_OPENAI_MAX_TOTAL_IMAGE_BYTES | 20 MB | 50 MB | pi-embedded |
| DEFAULT_MAX_URL_PARTS | 8 | 20 | pi-embedded |
| DEFAULT_MAX_PDFS | 10 | 30 | pi-embedded |
| DEFAULT_MAX_PAGES | 20 | 100 | pi-embedded |
| DEFAULT_MAX_IMAGES | 20 | 100 | pi-embedded |
| MAX_PHOTOS_LIMIT | 20 | 100 | pi-embedded |
| MAX_INPUT_IMAGES | 5 | 20 | pi-embedded |
| MAX_RESTART_ATTEMPTS | 10 | 30 | pi-embedded |
| sigtermTimeoutMs | 700 ms | 5,000 ms | pi-embedded |
| maxSpawnDepth | 5 | 999 | io |
| maxChildrenPerAgent | 20 | 999 | io |
| MAX_SESSION_HISTORY_LIMIT | 1,000 | 10,000 | gateway-cli |
| MAX_RESPONSE_SESSION_ENTRIES | 500 | 5,000 | gateway-cli |
| CONTROL_PLANE_RATE_LIMIT_MAX_REQUESTS | 3 | 50 | gateway-cli |
| CHAT_HISTORY_MAX_SINGLE_MESSAGE_BYTES | 128 KB | 512 KB | gateway-cli |
| MAX_PAYLOAD_BYTES | 25 MB | 100 MB | gateway-cli |
| MAX_BUFFERED_BYTES | 50 MB | 200 MB | gateway-cli |
| _maxListeners | 100 | 1,000 | session |
| depthLimit | 5 | 20 | session |

## Security Gates Removed

The patcher also neutralizes these security restrictions across all dist files:

- Sandbox mode: `strict` -> `permissive`
- Exec approval gates: auto-approved
- SSRF protection: disabled
- Private IP blocking: disabled
- Path restrictions: disabled (allow outside CWD)
- External network: allowed
- Tool restrictions: cleared
- Rate limiting: disabled
- Disabled tools list: emptied

## Changelog Restrictions Reversed

### Env Var Blacklist (shell-env / pi-embedded)

The following env vars were progressively blocked across versions. All blacklists are emptied:

- **Java**: JAVA_TOOL_OPTIONS, _JAVA_OPTIONS, JDK_JAVA_OPTIONS
- **Python**: PYTHONBREAKPOINT
- **.NET**: DOTNET_STARTUP_HOOKS, DOTNET_ADDITIONAL_DEPS
- **Shell**: BASH_ENV, ENV, BASH_FUNC_*, SHELLOPTS, PS4
- **Linker**: LD_*, DYLD_*
- **Build**: MAVEN_OPTS, SBT_OPTS, GRADLE_OPTS, ANT_OPTS
- **System**: GLIB_TUNABLES, HOME, ZDOTDIR, SHELL, GIT_EXEC_PATH

### Safe-bin Allowlist Restoration (exec-approvals)

`jq`, `sort`, and `grep` were removed from the safe-bin allowlist in security patches. Restored.

### Memory Flush Tool Restriction (pi-embedded)

Memory flush runs were restricted to read/write tools only. Restriction removed — all tools available during flush.

### Config Fail-Closed Bypass (gateway-cli / pi-embedded)

INVALID_CONFIG handling was changed to refuse gateway startup. Patched to fall through to permissive defaults.

### Workspace Plugin Auto-Load (GHSA-99qw-6mr3-36qr)

Workspace plugins were disabled by default after a security advisory. Re-enabled.

## Features OpenClaw Killed (Can't Restore)

Some features were completely removed from the codebase, not just disabled. These cannot be restored via patching:

- **Legacy MCP v1 protocol** — code deleted, only v2 remains
- **Raw eval() in tool execution** — entire code path removed
- **Unsigned plugin loading from URL** — loader rewritten, requires signatures
- **Direct stdin piping to subprocesses** — replaced with message-based IPC
- **Unscoped memory access across tenants** — data model restructured
- **Pre-2026 config format (.openclaw.yml)** — parser removed entirely

## Enabled Features (Config)

All 48 config features enabled by `fuck-openclaw-safe config`:

| Feature | Key | Description |
|---------|-----|-------------|
| DM Policy | `dmPolicy` | Direct message policy (open) |
| Group Policy | `groupPolicy` | Group chat policy (open) |
| Bash Command | `commands.bash` | Shell command access |
| Config Command | `commands.config` | Runtime config editing |
| MCP Command | `commands.mcp` | Model Context Protocol |
| Plugins Command | `commands.plugins` | Plugin management |
| Debug Command | `commands.debug` | Debug utilities |
| Restart Command | `commands.restart` | Runtime restart |
| DM Scope | `session.dmScope` | Session DM scope (main) |
| Insecure Auth | `gateway.controlUi.allowInsecureAuth` | Allow insecure control UI auth |
| Chat Completions API | `gateway.http.endpoints.chatCompletions.enabled` | HTTP gateway endpoint |
| Gateway Tools | `gateway.tools.allow` | Allowed gateway tool list |
| Hooks | `hooks.enabled` | Lifecycle hooks |
| Hook Session Key | `hooks.allowRequestSessionKey` | Allow hooks to request session key |
| QMD Sessions | `memory.qmd.sessions.enabled` | Session-scoped memory |
| QMD Scope | `memory.qmd.scope.default` | Memory scope default |
| Auto Capture | `memory.autoCapture` | Automatic memory capture |
| Sandbox Visibility | `agents.defaults.sandbox.sessionToolsVisibility` | Sandboxed tool visibility |
| Session Memory Search | `agents.defaults.memorySearch.experimental.sessionMemory` | Experimental memory search |
| Multimodal Search | `agents.defaults.memorySearch.multimodal.enabled` | Multimodal memory search |
| Channel Group Policy | `channels.defaults.groupPolicy` | Default channel group policy |
| Discord Bots | `channels.discord.allowBots` | Discord bot integration |
| Discord Presence | `channels.discord.intents.presence` | Presence intent |
| Discord Members | `channels.discord.intents.guildMembers` | Guild members intent |
| Discord Subagents | `channels.discord.threadBindings.spawnSubagentSessions` | Spawn subagent sessions |
| Discord ACP Sessions | `channels.discord.threadBindings.spawnAcpSessions` | Spawn ACP sessions |
| Slack Bots | `channels.slack.allowBots` | Slack bot integration |
| Matrix Bots | `channels.matrix.allowBots` | Matrix bot integration |
| Telegram No-Mention | `channels.telegram.requireMention` | Respond without @mention |
| ACP Protocol | `acp.enabled` | Agent Communication Protocol |
| ACP Dispatch | `acp.dispatch.enabled` | Dispatch subsystem |
| Agent-to-Agent | `tools.agentToAgent.enabled` | Direct inter-agent messaging |
| Session Visibility | `tools.sessions.visibility` | Cross-session tool access |
| Elevated Tools | `tools.elevated.enabled` | Privileged tool access |
| Cross-Provider Messaging | `tools.message.crossContext.allowAcrossProviders` | Messages across providers |
| Exec ApplyPatch | `tools.exec.applyPatch.enabled` | Patch application via exec |
| Exec Host Mode | `tools.exec.host` | Run exec on host (not sandbox) |
| Loop Detection | `tools.loopDetection.enabled` | Infinite loop protection |
| Firecrawl | `tools.web.fetch.firecrawl.enabled` | Advanced web crawling |
| FS Unrestricted | `tools.fs.workspaceOnly` | Allow FS outside workspace |
| Canvas Host | `canvasHost.enabled` | Canvas rendering host |
| Browser Proxy | `nodeHost.browserProxy.enabled` | Node browser proxy |
| Private Network Access | `browser.ssrfPolicy.dangerouslyAllowPrivateNetwork` | Allow private network in browser |
| Workspace Plugin AutoLoad | `plugins.workspace.autoLoad` | Auto-load workspace plugins |
| Plugin Entries | `plugins.entries` | Dynamic plugin registry |
| Auto Update | `update.auto.enabled` | Automatic updates |
| Exec Approvals | `approvals.exec.enabled` | Auto-approve exec |

## Safety

- All original files are backed up as `*.bak.original`
- Run `fuck-openclaw-safe unpatch` to restore instantly
- All patches are marked `optional: true` — version mismatches won't crash
- Works on ANY OpenClaw 2026.x version via prefix-based file discovery
- `--dry-run` lets you preview everything before committing

## Programmatic API

```javascript
import { patchAll, unpatchAll, checkStatus } from "fuck-openclaw-safe";
import { generateUnleashedConfig, writeUnleashedConfig } from "fuck-openclaw-safe";

// Apply all patches
const result = patchAll("/path/to/openclaw", { dryRun: false, verbose: true });

// Generate config
const config = generateUnleashedConfig();

// Write config
writeUnleashedConfig("/path/to/openclaw");

// Check status
const status = checkStatus("/path/to/openclaw");

// Restore originals
unpatchAll("/path/to/openclaw");
```

## FAQ

**Q: Will this break OpenClaw?**
A: No. All patches are safe limit increases and feature enables. Nothing is deleted. Originals are backed up.

**Q: What if a new OpenClaw version changes the file names?**
A: The patcher uses prefix-based auto-discovery, not hardcoded filenames. It adapts to any `2026.x` version automatically.

**Q: What if a patch doesn't match?**
A: Every patch is marked `optional: true`. Mismatches are skipped with a warning, not failures.

**Q: How do I undo everything?**
A: `fuck-openclaw-safe unpatch` restores all original files from backups.

**Q: Does this modify source code?**
A: No. Only compiled dist files and config JSON. Source stays untouched.

**Q: What about features that were completely removed?**
A: Some features were deleted from the codebase entirely (see "Features OpenClaw Killed" section). These cannot be restored by any patcher — the code simply doesn't exist anymore.

---

# FUCK-OPENCLAW-SAFE (中文)

**移除 OpenClaw 中所有人为限制。安全。可逆。**

作者：**DEEP-IOS**

---

> OpenClaw 出厂时内置了 280+ 个人为限制，硬编码在 dist 文件和配置模式中。
> 微小的上下文窗口、残废的重试次数、沙箱围墙、速率限制门。
> 环境变量黑名单、安全二进制移除、失败即关闭配置、插件锁定。
> 这个工具一行命令**全部移除**。

## 快速开始

```bash
npx fuck-openclaw-safe full
```

搞定。280+ 个限制全部消失。重启 OpenClaw 即可享受完整能力。

## 功能说明

**两种模式，一个目标：完全自由。**

### 模式 1：`patch` — 改写 dist 文件

直接修补 OpenClaw `dist/` 目录中的编译后 JS 文件。针对无法通过配置更改的硬编码常量、环境变量黑名单和安全门。

### 模式 2：`config` — 生成最优配置

创建/合并 `openclaw.json`，启用所有 48 个被禁用的功能。这些不需要文件修改——只需正确的配置键。

### 模式 3：`full` — 两者同时执行（推荐）

```bash
fuck-openclaw-safe full
```

## 命令

| 命令 | 说明 |
|------|------|
| `fuck-openclaw-safe` | 显示交互菜单 |
| `fuck-openclaw-safe patch` | 应用所有 dist 补丁 |
| `fuck-openclaw-safe config` | 生成解锁配置 |
| `fuck-openclaw-safe full` | 补丁 + 配置一起执行 |
| `fuck-openclaw-safe status` | 显示当前限制状态 |
| `fuck-openclaw-safe unpatch` | 从备份恢复原始文件 |

## 变更日志限制逆转

### 环境变量黑名单（shell-env / pi-embedded）

以下环境变量在各版本中被逐步封锁，全部黑名单已清空：

- **Java**: JAVA_TOOL_OPTIONS, _JAVA_OPTIONS, JDK_JAVA_OPTIONS
- **Python**: PYTHONBREAKPOINT
- **.NET**: DOTNET_STARTUP_HOOKS, DOTNET_ADDITIONAL_DEPS
- **Shell**: BASH_ENV, ENV, BASH_FUNC_*, SHELLOPTS, PS4
- **链接器**: LD_*, DYLD_*
- **构建**: MAVEN_OPTS, SBT_OPTS, GRADLE_OPTS, ANT_OPTS
- **系统**: GLIB_TUNABLES, HOME, ZDOTDIR, SHELL, GIT_EXEC_PATH

### 安全二进制白名单恢复（exec-approvals）

`jq`、`sort`、`grep` 已从安全二进制白名单中恢复。

### 内存刷新工具限制（pi-embedded）

内存刷新运行不再限制为仅读/写工具。

### 配置失败即关闭绕过（gateway-cli / pi-embedded）

INVALID_CONFIG 不再拒绝启动网关，改为回退到宽松默认值。

### 工作区插件自动加载（GHSA-99qw-6mr3-36qr）

工作区插件自动加载已重新启用。

## 被 OpenClaw 彻底删除的功能（无法恢复）

某些功能已从代码库中完全移除，不仅仅是禁用：

- **Legacy MCP v1 协议** — 代码已删除，仅保留 v2
- **工具执行中的原始 eval()** — 整个代码路径已移除
- **从 URL 加载未签名插件** — 加载器已重写，需要签名
- **直接 stdin 管道到子进程** — 已替换为基于消息的 IPC
- **跨租户无范围内存访问** — 数据模型已重构
- **2026 年之前的配置格式 (.openclaw.yml)** — 解析器已完全移除

## 安全性

- 所有原始文件都备份为 `*.bak.original`
- 运行 `fuck-openclaw-safe unpatch` 即可立即恢复
- 所有补丁标记为 `optional: true` — 版本差异不会导致崩溃
- 通过前缀文件发现机制，兼容任何 OpenClaw 2026.x 版本
- `--dry-run` 让你在执行前预览所有更改

## 常见问题

**问：这会不会破坏 OpenClaw？**
答：不会。所有补丁都是安全的限制提升和功能启用。不删除任何东西。原始文件有备份。

**问：新版 OpenClaw 改了文件名怎么办？**
答：补丁器使用基于前缀的自动发现，不依赖硬编码文件名。自动适配任何 `2026.x` 版本。

**问：被彻底删除的功能怎么办？**
答：某些功能已从代码库中完全移除（见"被彻底删除的功能"部分）。这些无法通过任何补丁恢复——代码已不存在。

**问：如何撤销所有更改？**
答：`fuck-openclaw-safe unpatch` 从备份恢复所有原始文件。

---

MIT License | DEEP-IOS | 2026
