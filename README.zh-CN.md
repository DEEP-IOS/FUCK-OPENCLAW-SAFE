# FUCK-OPENCLAW-SAFE

**移除 OpenClaw 中所有人为限制。一行命令。完全可逆。**

[English](./README.md)

---

## 一行命令，搞定

```bash
npx f-ck-openclaw-safe full
```

280+ 个限制全部消失。重启 OpenClaw。完事。

或者克隆到本地运行：

```bash
git clone https://github.com/DEEP-IOS/FUCK-OPENCLAW-SAFE.git
cd FUCK-OPENCLAW-SAFE
node cli.js full
```

---

## 为什么做这个

OpenClaw 在编译后的 dist 文件和默认配置中硬编码了 280+ 个人为限制。从 2026 年 1 月到 3 月，每个版本都在加限制。结果就是：Agent 被阉割、协作崩溃、用户抓狂。

**你的硬件。你的 API Key。你的规则。**

## 你是不是也遇到了这些问题？

| 你的体感 | 根本原因 | 修复后 |
|---|---|---|
| Agent 做到一半就停了 | `MAX_RUN_RETRY = 160`，循环 160 次就放弃 | **2,000** |
| 子 Agent 什么也做不了 | `SUBAGENT_TOOL_DENY` 禁止了 spawn/session/gateway 工具 | **清空禁止列表** |
| 多 Agent 协作像单兵作战 | A2A 关闭 + 只能看自己的会话树 + 对话 5 轮截断 | **A2A 开启，全局可见，200 轮** |
| 大文件读不全 | `READ_PAGE = 50KB`，整个文件被截断 | **512KB** |
| 回答总是被截断 | `DEFAULT_MAX_TOKENS = 4096` 输出上限 | **16,384** |
| 命令行工具总要我确认 | `jq`/`sort`/`grep` 被移出安全白名单 + exec=allowlist | **恢复 + host 模式** |
| 上下文窗口感觉很小 | `DEFAULT_CONTEXT_WINDOW = 32,000`，远低于模型实际能力 | **200,000** |
| 长任务直接超时 | `JOB_TTL = 3 小时` 硬上限 | **24 小时** |
| 最多只能开 5 个子 Agent | `maxChildrenPerAgent = 5`（默认），Zod `.max(20)`（硬墙） | **999** |
| 子 Agent 完全扁平，不能嵌套 | `maxSpawnDepth = 1`，只允许一层 | **999** |
| 工具返回结果被截断 | `HARD_MAX_TOOL_RESULT_CHARS = 400K` | **2,000,000** |
| 项目启动加载几乎为零 | `DEFAULT_BOOTSTRAP_MAX_CHARS = 20K` | **200,000** |
| 压缩后上下文丢太多 | `MAX_RECENT_TURNS_PRESERVE = 12`，`DEFAULT = 3` | **48 / 8** |
| Agent 对话太短 | `MAX_PING_PONG_TURNS = 5`，5 轮强制截断 | **200** |
| 命令串行执行，一个个来，慢 | `maxConcurrent = 1` 命令通道 | **解锁** |

每一条都是 OpenClaw 团队故意设定的硬编码值。

## 工作原理

**三种模式，一个目标：完全自由。**

| 模式 | 命令 | 作用 |
|------|------|------|
| **patch** | `f-ck-openclaw-safe patch` | 改写 dist 文件中的硬编码限制 |
| **config** | `f-ck-openclaw-safe config` | 生成 `openclaw.json` 启用 48 个被禁功能 |
| **full** | `f-ck-openclaw-safe full` | 两者同时执行（**推荐**） |

其他命令：

| 命令 | 说明 |
|------|------|
| `f-ck-openclaw-safe status` | 显示当前限制状态 |
| `f-ck-openclaw-safe unpatch` | 从备份恢复原始文件 |

参数：`--openclaw-dir=路径`、`--dry-run`、`--verbose`

## 56 项限制修改一览

| 参数 | 修改前 | 修改后 |
|------|--------|--------|
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
| MAX_JOB_TTL_MS | 3 小时 | 24 小时 |
| DEFAULT_SUBAGENT_ANNOUNCE_TIMEOUT_MS | 90 秒 | 10 分钟 |
| MAX_ANNOUNCE_RETRY_COUNT | 3 | 20 |
| DEFAULT_PARENT_FORK_MAX_TOKENS | 100,000 | 200,000 |
| MAX_COMPACTION_SUMMARY_CHARS | 16,000 | 64,000 |
| MAX_STEER_MESSAGE_CHARS | 4,000 | 16,000 |
| MAX_CONTEXT_CHARS | 3,000 | 16,000 |
| MAX_INSTRUCTION_LENGTH | 800 | 4,000 |
| MAX_QUALITY_GUARD_MAX_RETRIES | 3 | 8 |
| MAX_TOOL_FAILURES | 8 | 32 |
| DEFAULT_MAX_PDFS | 10 | 30 |
| DEFAULT_MAX_PAGES | 20 | 100 |
| DEFAULT_MAX_IMAGES | 20 | 100 |
| maxSpawnDepth（Zod 硬墙） | 5 | 999 |
| maxChildrenPerAgent（Zod 硬墙） | 20 | 999 |
| MAX_SESSION_HISTORY_LIMIT | 1,000 | 10,000 |
| CONTROL_PLANE_RATE_LIMIT | 3 次/分 | 50 次/分 |
| MAX_PAYLOAD_BYTES | 25 MB | 100 MB |
| MAX_BUFFERED_BYTES | 50 MB | 200 MB |
| ...以及更多 20 项 | | |

## 安全门移除

- 沙箱强制执行 → 宽松模式
- 命令执行审批门 → 自动通过
- SSRF / 内网 IP 拦截 → 禁用
- 路径遍历防护 → 禁用
- 工具拒绝列表 → 清空
- 命令混淆检测 → 禁用
- 环境变量黑名单 → 清空（22+ 个变量：JAVA_TOOL_OPTIONS、PYTHONBREAKPOINT、LD_*、BASH_ENV 等）
- 安全二进制移除 → 恢复（jq、sort、grep）
- 内存刷新工具限制 → 全部工具可用
- 配置失败即关闭 → 失败即放行
- 工作区插件自动加载 → 重新启用

## 48 项配置功能启用

ACP 协议、Agent 间通信、跨 Provider 消息、会话可见性（全局）、提权工具、exec host 模式、循环检测、Canvas 画布、浏览器代理、OpenAI 兼容端点、全部 6 个聊天命令（/bash、/config、/mcp、/plugins、/debug、/restart）、Hooks、QMD 会话记忆、自动捕获、多模态搜索、Discord/Slack/Matrix 机器人集成、DM 策略（开放）、群组策略（开放）等。

## 被 OpenClaw 彻底删除的功能（无法恢复）

某些功能已从代码库中完全移除：
- Legacy MCP v1 协议
- 工具执行中的原始 eval()
- 从 URL 加载未签名插件
- 直接 stdin 管道到子进程
- 2026 年之前的配置格式（.openclaw.yml）

## 安全性

- 所有原始文件备份为 `*.bak.original`
- `f-ck-openclaw-safe unpatch` 立即恢复
- 所有补丁标记 `optional: true`，版本不匹配只跳过不崩溃
- 基于前缀的文件发现，兼容任何 OpenClaw 2026.x 版本
- `--dry-run` 预览所有更改再决定

## 常见问题

**会不会破坏 OpenClaw？** 不会。安全的限制提升和功能启用。不删除任何东西。原始文件有备份。

**新版文件名变了怎么办？** 基于前缀自动发现，自动适配。

**补丁没匹配上？** 跳过并警告，不会失败。

**怎么撤销？** `f-ck-openclaw-safe unpatch` 一键恢复。

---

MIT License | [DEEP-IOS](https://github.com/DEEP-IOS) | 2026
