# browser-control — Recovered Feature

**Removed in:** OpenClaw v2026.1.29 (standalone command removed), v2026.3.22 (extension relay + assets removed)
**Recovered by:** DEEP-IOS

## What It Was

A standalone HTTP server for browser automation built into OpenClaw. It managed Chrome/Chromium instances via CDP (Chrome DevTools Protocol), supported multiple browser profiles, and exposed a REST API for tab management, page actions, screenshots, and AI-powered browsing.

The server ran on `127.0.0.1` at a configurable port (default: varies by profile) and integrated with Playwright for advanced automation.

## Compiled Source Location

The full compiled JS is available at:

```
E:\FUCK-OPENCLAW-SAFE\old-versions\v2026.1.29b1\dist\browser\
```

Key files:
- `server.js` — Express HTTP server setup, binds to 127.0.0.1
- `control-service.js` — Service lifecycle (start/stop), profile management
- `config.js` — Browser config resolution
- `routes/` — All HTTP route handlers
- `pw-ai.js` — Playwright AI integration
- `chrome.js` — Chrome process management
- `cdp.js` — CDP connection handling
- `extension-relay.js` — Chrome extension WebSocket relay
- `screenshot.js` — Screenshot capture
- `profiles-service.js` — Multi-profile management

## REST API Endpoints

### Basic Routes (`routes/basic.js`)

| Method | Path | Description |
|--------|------|-------------|
| `GET /` | Status — returns profile info, CDP readiness, browser detection, config |
| `GET /profiles` | List all configured browser profiles with their status |
| `POST /start` | Start browser for a profile (auto-launches Chrome if needed) |
| `POST /stop` | Stop running browser for a profile |

### Tab Routes (`routes/tabs.js`)

| Method | Path | Description |
|--------|------|-------------|
| `GET /tabs` | List all open tabs (returns `{ running, tabs }`) |
| `POST /tabs/open` | Open a new tab. Body: `{ url: string }` |
| `POST /tabs/focus` | Focus a tab. Body: `{ targetId: string }` |
| `DELETE /tabs/:targetId` | Close a tab by target ID |
| `POST /tabs/action` | Execute an action on a tab. Body: `{ action, index?, ... }` |

### Agent Routes (`routes/agent.js`)

Organized into sub-routers:

**Snapshot** (`routes/agent.snapshot.js`):
| Method | Path | Description |
|--------|------|-------------|
| `GET /snapshot` | Take accessibility snapshot of current page |
| `POST /snapshot` | Take snapshot with options |

**Actions** (`routes/agent.act.js`):
| Method | Path | Description |
|--------|------|-------------|
| `POST /act` | Execute a browser action (click, type, scroll, etc.) |
| `POST /act/batch` | Execute multiple actions in sequence |

**Debug** (`routes/agent.debug.js`):
| Method | Path | Description |
|--------|------|-------------|
| `GET /debug/console` | Get console log entries |
| `GET /debug/network` | Get network request log |

**Storage** (`routes/agent.storage.js`):
| Method | Path | Description |
|--------|------|-------------|
| `GET /storage/cookies` | Get cookies for current page |
| `POST /storage/cookies` | Set cookies |
| `DELETE /storage/cookies` | Clear cookies |

### Profile Selection

All endpoints accept a `?profile=NAME` query parameter to target a specific browser profile. If omitted, the default profile is used.

## Configuration (Original)

```json
{
  "browser": {
    "enabled": true,
    "controlPort": 9222,
    "headless": false,
    "noSandbox": false,
    "attachOnly": false,
    "executablePath": null,
    "profiles": {
      "default": {
        "cdpPort": 9222,
        "cdpUrl": "http://127.0.0.1:9222",
        "driver": "chrome",
        "color": "#4285F4"
      },
      "work": {
        "cdpPort": 9223,
        "cdpUrl": "http://127.0.0.1:9223",
        "driver": "extension",
        "color": "#EA4335"
      }
    }
  }
}
```

## How to Use Standalone (Advanced)

The compiled dist files can be run directly if you provide the required dependencies (`express`, OpenClaw's config/logging modules). For most users, the simpler approach is:

1. Use an older OpenClaw version (v2026.1.29b1 or earlier) that still includes the browser command
2. Or use Playwright directly for browser automation
3. Or reference the route definitions above to build your own HTTP wrapper around CDP

```bash
# The compiled files are at:
ls E:/FUCK-OPENCLAW-SAFE/old-versions/v2026.1.29b1/dist/browser/

# You can study the route handlers to understand the API:
# routes/basic.js   — profile management
# routes/tabs.js    — tab CRUD
# routes/agent.*.js — automation actions
```

## Why It Was Removed

The standalone `openclaw browser` command was removed in v2026.1.29. The Chrome extension relay path and bundled extension assets were removed in v2026.3.22. Browser automation was folded into the agent tool pipeline and is no longer accessible as a standalone service.
