# FUCK-OPENCLAW-SAFE

**Remove every artificial restriction in OpenClaw. One command. Fully reversible.**

[中文文档](./README.zh-CN.md)

---

## One Command. That's It.

```bash
npx f-ck-openclaw-safe full
```

280+ restrictions gone. Restart OpenClaw. Done.

Or clone and run locally:

```bash
git clone https://github.com/DEEP-IOS/FUCK-OPENCLAW-SAFE.git
cd FUCK-OPENCLAW-SAFE
node cli.js full
```

---

## Why This Exists

OpenClaw ships with 280+ artificial limits hardcoded into compiled dist files and config defaults. These limits were tightened every version from January to March 2026. The result: crippled agents, broken collaboration, and frustrated users.

**Your hardware. Your API keys. Your rules.**

## Sound Familiar?

| What you experience | Root cause | After fix |
|---|---|---|
| Agent stops halfway through complex tasks | `MAX_RUN_RETRY = 160` — gives up after 160 iterations | **2,000** |
| Sub-agents can't do anything useful | `SUBAGENT_TOOL_DENY` blocks spawn/session/gateway tools | **empty deny list** |
| Multi-agent feels like single-agent | A2A disabled + `visibility = tree` + `PING_PONG = 5` | **A2A on, all visible, 200 turns** |
| Can't read large files properly | `READ_PAGE = 50KB` — file gets truncated | **512KB** |
| Responses always get cut off | `DEFAULT_MAX_TOKENS = 4096` output cap | **16,384** |
| Keeps asking to confirm basic commands | `jq`/`sort`/`grep` removed from safe-bin + exec=allowlist | **restored + host mode** |
| Context window feels tiny | `DEFAULT_CONTEXT_WINDOW = 32,000` — far below model capacity | **200,000** |
| Long tasks just timeout and die | `JOB_TTL = 3 hours` hard ceiling | **24 hours** |
| Can't spawn more than 5 sub-agents | `maxChildrenPerAgent = 5`, Zod `.max(20)` hard wall | **999** |
| Sub-agents are flat, no nesting | `maxSpawnDepth = 1` — one level only | **999** |
| Tool results are truncated | `HARD_MAX_TOOL_RESULT_CHARS = 400K` | **2,000,000** |
| Project bootstrap loads almost nothing | `DEFAULT_BOOTSTRAP_MAX_CHARS = 20K` | **200,000** |
| Compaction loses too much context | `MAX_RECENT_TURNS_PRESERVE = 12` | **48** |
| Agent conversations are too short | `MAX_PING_PONG_TURNS = 5` — forced stop after 5 rounds | **200** |
| Commands run one at a time | `maxConcurrent = 1` on command lane | **unlocked** |

Every single one is a hardcoded value that OpenClaw's team intentionally set.

## How It Works

**Three modes. One goal: total freedom.**

| Mode | Command | What it does |
|------|---------|-------------|
| **patch** | `f-ck-openclaw-safe patch` | Rewrites hardcoded limits in dist files |
| **config** | `f-ck-openclaw-safe config` | Generates `openclaw.json` enabling 48 disabled features |
| **full** | `f-ck-openclaw-safe full` | Both at once **(recommended)** |

Additional commands:

| Command | Description |
|---------|-------------|
| `f-ck-openclaw-safe status` | Show current restriction status |
| `f-ck-openclaw-safe unpatch` | Restore originals from backup |

Flags: `--openclaw-dir=PATH`, `--dry-run`, `--verbose`

## All 56 Limit Patches

| Constant | Before | After |
|----------|--------|-------|
| MAX_RUN_RETRY_ITERATIONS | 160 | 2,000 |
| MAX_PING_PONG_TURNS | 5 | 200 |
| DEFAULT_CONTEXT_WINDOW | 32,000 | 200,000 |
| DEFAULT_MAX_TOKENS | 4,096 | 16,384 |
| HARD_MAX_TOOL_RESULT_CHARS | 400,000 | 2,000,000 |
| MAX_OBSERVATION_INPUT_CHARS | 64,000 | 256,000 |
| MAX_OVERFLOW_COMPACTION_ATTEMPTS | 3 | 10 |
| MAX_RECENT_TURNS_PRESERVE | 12 | 48 |
| DEFAULT_BOOTSTRAP_MAX_CHARS | 20,000 | 200,000 |
| DEFAULT_READ_PAGE_MAX_BYTES | 50 KB | 512 KB |
| MAX_ADAPTIVE_READ_MAX_BYTES | 512 KB | 2 MB |
| MAX_ADAPTIVE_READ_PAGES | 8 | 64 |
| MAX_JOB_TTL_MS | 3 hours | 24 hours |
| DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS | 90s | 10 min |
| MAX_ANNOUNCE_RETRY_COUNT | 3 | 20 |
| DEFAULT_PARENT_FORK_MAX_TOKENS | 100,000 | 200,000 |
| MAX_COMPACTION_SUMMARY_CHARS | 16,000 | 64,000 |
| MAX_STEER_MESSAGE_CHARS | 4,000 | 16,000 |
| MAX_CONTEXT_CHARS | 3,000 | 16,000 |
| MAX_INSTRUCTION_LENGTH | 800 | 4,000 |
| MAX_QUALITY_GUARD_MAX_RETRIES | 3 | 8 |
| MAX_TOOL_FAILURES | 8 | 32 |
| MAX_RECENT_TURN_TEXT_CHARS | 600 | 2,000 |
| DEFAULT_MAX_PDFS | 10 | 30 |
| DEFAULT_MAX_PAGES | 20 | 100 |
| DEFAULT_MAX_IMAGES | 20 | 100 |
| MAX_PHOTOS_LIMIT | 20 | 100 |
| MAX_INPUT_IMAGES | 5 | 20 |
| maxSpawnDepth (Zod wall) | 5 | 999 |
| maxChildrenPerAgent (Zod wall) | 20 | 999 |
| MAX_SESSION_HISTORY_LIMIT | 1,000 | 10,000 |
| CONTROL_PLANE_RATE_LIMIT | 3 req | 50 req |
| MAX_PAYLOAD_BYTES | 25 MB | 100 MB |
| MAX_BUFFERED_BYTES | 50 MB | 200 MB |
| _maxListeners | 100 | 1,000 |
| ...and 20 more | | |

## Security Gates Removed

- Sandbox enforcement → permissive
- Exec approval gates → auto-approved
- SSRF / private IP blocking → disabled
- Path traversal guards → disabled
- Tool deny lists → emptied
- Command obfuscation detection → disabled
- Env var blacklists → cleared (22+ vars: JAVA_TOOL_OPTIONS, PYTHONBREAKPOINT, LD_*, BASH_ENV, etc.)
- Safe-bin removals → restored (jq, sort, grep)
- Memory flush tool restriction → all tools available
- Config fail-closed → fail-open
- Workspace plugin auto-load → re-enabled

## 48 Config Features Enabled

ACP protocol, Agent-to-Agent messaging, cross-provider messaging, session visibility (all), elevated tools, exec host mode, loop detection, canvas host, browser proxy, OpenAI-compatible endpoint, all 6 chat commands (/bash, /config, /mcp, /plugins, /debug, /restart), hooks, QMD session memory, auto-capture, multimodal search, Discord/Slack/Matrix bot integration, DM policy (open), group policy (open), and more.

## Features OpenClaw Killed (Can't Restore)

Some features were completely removed from the codebase:
- Legacy MCP v1 protocol
- Raw eval() in tool execution
- Unsigned plugin loading from URL
- Direct stdin piping to subprocesses
- Pre-2026 config format (.openclaw.yml)

## Safety

- All originals backed up as `*.bak.original`
- `f-ck-openclaw-safe unpatch` restores instantly
- All patches are `optional: true` — version mismatches skip, never crash
- Prefix-based file discovery — works on ANY OpenClaw 2026.x
- `--dry-run` to preview everything first

## FAQ

**Will this break OpenClaw?** No. Safe limit increases and feature enables. Nothing deleted. Originals backed up.

**New OpenClaw version changed filenames?** Prefix-based auto-discovery adapts automatically.

**Patch doesn't match?** Skipped with warning. Never fails.

**How to undo?** `f-ck-openclaw-safe unpatch`

---

MIT License | [DEEP-IOS](https://github.com/DEEP-IOS) | 2026
