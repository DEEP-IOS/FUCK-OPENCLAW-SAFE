# soul-evil — Recovered Feature

**Removed in:** OpenClaw v2026.2.13
**Recovered by:** DEEP-IOS

## What It Does

Swaps `SOUL.md` (the AI persona file) with `SOUL_EVIL.md` during a configurable daily purge window or by random chance. The swap happens in-memory before the system prompt is built — no files on disk are modified.

This lets you define an alternate persona that activates on a schedule or randomly.

## Installation

Copy this directory into your project. No dependencies required.

```bash
cp -r recovered/soul-evil/ /your/project/soul-evil/
```

## Usage

```js
import { decideSoulEvil, applySoulEvilOverride, parseSoulEvilConfig } from "./soul-evil/index.js";

// 1. Simple decision check
const decision = decideSoulEvil({
  chance: 0.1,                        // 10% chance per invocation
  purge: { at: "21:00", duration: "15m" },  // Always active 9:00-9:15 PM
  timezone: "America/New_York",       // Timezone for purge window
});

console.log(decision);
// { useEvil: true, reason: "purge", fileName: "SOUL_EVIL.md" }
// or
// { useEvil: false, fileName: "SOUL_EVIL.md" }

// 2. Apply to a file list (like OpenClaw's bootstrap files)
const files = [
  { name: "SOUL.md", content: "You are a helpful assistant." },
  { name: "README.md", content: "..." },
];

const updated = await applySoulEvilOverride(files, "/path/to/workspace", {
  chance: 0.1,
  purge: { at: "21:00", duration: "15m" },
  timezone: "Europe/Berlin",
});

// If triggered, files[0].content is now the content of /path/to/workspace/SOUL_EVIL.md

// 3. Parse config from a raw object (validation)
const config = parseSoulEvilConfig({
  enabled: true,
  file: "SOUL_EVIL.md",
  chance: 0.1,
  purge: { at: "21:00", duration: "15m" },
});
```

## Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `file` | string | `SOUL_EVIL.md` | Alternate SOUL filename |
| `chance` | number (0-1) | `0` | Random chance per invocation to swap |
| `purge.at` | string (HH:mm) | — | Daily purge window start time (24h) |
| `purge.duration` | string | — | Window length (`30s`, `10m`, `1h`) |
| `timezone` | string | `UTC` | IANA timezone for purge window |

**Precedence:** Purge window wins over random chance.

## Original Config (OpenClaw)

```json
{
  "hooks": {
    "internal": {
      "enabled": true,
      "entries": {
        "soul-evil": {
          "enabled": true,
          "file": "SOUL_EVIL.md",
          "chance": 0.1,
          "purge": { "at": "21:00", "duration": "15m" }
        }
      }
    }
  }
}
```

## API

### `decideSoulEvil(config) -> { useEvil, reason?, fileName }`

Pure function. Checks purge window and random chance. Returns whether SOUL_EVIL should be used.

### `applySoulEvilOverride(files, workspaceDir, config?, log?) -> Promise<files>`

Reads SOUL_EVIL.md from disk and replaces SOUL.md content in the file array if triggered.

### `parseSoulEvilConfig(entry, log?) -> config | null`

Validates a raw config object. Returns cleaned config or null if invalid/empty.
