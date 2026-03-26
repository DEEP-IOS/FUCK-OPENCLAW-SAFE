# auto-reply — Recovered Feature (Reference Implementation)

**Removed in:** OpenClaw v2026.1.8
**Recovered by:** DEEP-IOS

## What It Did

`autoReply` was a config flag that controlled whether the bot would automatically respond to every message in a channel (Discord, Slack, Telegram, Matrix) or only when explicitly mentioned (`@bot`).

### autoReply vs requireMention

| Mode | Behavior |
|------|----------|
| `autoReply: true` | Bot responds to ALL messages in configured channels |
| `autoReply: false` / `requireMention: true` | Bot only responds when mentioned by name or @-tag |

When `autoReply` was removed, all chat integrations became mention-only. There is no config flag to restore the old behavior in current OpenClaw versions.

## Dispatcher Architecture

The auto-reply system was built as a dispatcher pipeline:

```
Inbound Message
  -> Platform Adapter (Discord/Slack/Telegram/Matrix)
    -> Envelope Parser (extract sender, channel, text, media)
      -> Activation Check:
          - Is it a DM? -> always reply
          - Is autoReply enabled for this channel? -> reply
          - Is bot mentioned? -> reply
          - Otherwise -> ignore
        -> Debounce (inbound-debounce.ts)
          -> Command Detection (command-detection.ts)
            -> Skill Commands (skill-commands.ts)
              -> Model Runtime (model-runtime.ts)
                -> Reply Builder (reply.ts)
                  -> Send Policy (send-policy.ts)
                    -> Platform Send
```

## Source Location

The full source is available at:

```
E:\Data\openclaw-2026.3.2\src\auto-reply\
```

### Key Files

| File | Role |
|------|------|
| `dispatch.ts` | Main dispatcher — routes inbound messages through the pipeline |
| `envelope.ts` | Message envelope parser — normalizes platform-specific message formats |
| `group-activation.ts` | Channel activation logic — where autoReply check lived |
| `inbound-debounce.ts` | Rate limiting for inbound messages |
| `command-detection.ts` | Detects slash commands and special triggers |
| `command-auth.ts` | Authorization checks for commands |
| `commands-registry.ts` | Registry of all bot commands |
| `commands-registry.data.ts` | Command definitions |
| `skill-commands.ts` | Skill-based command routing |
| `reply.ts` | Reply builder — constructs and formats responses |
| `reply/` | Reply sub-modules (streaming, directives, triggers) |
| `send-policy.ts` | Controls when/how replies are sent |
| `model-runtime.ts` | Model selection and runtime config |
| `model.ts` | Model abstraction |
| `status.ts` | Bot status management |
| `heartbeat.ts` | Heartbeat/keepalive for chat connections |
| `media-note.ts` | Media attachment handling |
| `thinking.ts` | "Typing..." indicator management |
| `tokens.ts` | Token counting utilities |
| `tool-meta.ts` | Tool metadata for chat context |
| `templating.ts` | Message template engine |
| `chunk.ts` | Message chunking for platform limits |
| `fallback-state.ts` | Fallback state when primary state unavailable |
| `types.ts` | TypeScript type definitions |

## Config Schema (Original)

```json
{
  "chat": {
    "discord": {
      "autoReply": true,
      "requireMention": false,
      "channels": ["general", "ai-chat"],
      "dmPolicy": "open",
      "groupPolicy": "open"
    },
    "slack": {
      "autoReply": true,
      "requireMention": false,
      "channels": ["#general"],
      "dmPolicy": "open"
    },
    "telegram": {
      "autoReply": true,
      "groupPolicy": "open"
    }
  }
}
```

## Why It Can't Be Cleanly Repackaged

The auto-reply dispatcher is deeply coupled to:
- OpenClaw's session management and agent lifecycle
- Platform-specific adapters (Discord.js, Slack Bolt, etc.)
- The model runtime and tool pipeline
- Internal state management and heartbeat systems

A standalone reimplementation would require rewriting most of the chat integration layer. The source is preserved for reference and for anyone building their own chat bot framework.

## Workaround

If you need auto-reply behavior with current OpenClaw:
1. Use a thin proxy bot that forwards ALL channel messages as mentions
2. Or build a custom integration using the source files as reference
3. Or use an older OpenClaw version (pre-v2026.1.8) that still has the flag
