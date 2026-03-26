# food-order Skill — Recovered Feature

**Removed in:** OpenClaw v2026.2.22
**Recovered by:** DEEP-IOS

## What It Does

Reorders Foodora orders and tracks ETA/delivery status using [`ordercli`](https://ordercli.sh). The skill teaches the AI to safely preview orders before placing them, and never auto-confirm without explicit user approval.

## Requirements

- `ordercli` binary — Install via Go: `go install github.com/steipete/ordercli/cmd/ordercli@latest`

## Installation

### Manual (any AI tool that supports SKILL.md)

1. Copy `SKILL.md` to your skills directory:
   ```bash
   mkdir -p ~/.openclaw/skills/food-order
   cp SKILL.md ~/.openclaw/skills/food-order/SKILL.md
   ```

2. Or point OpenClaw's config at it:
   ```json
   {
     "skills": {
       "food-order": {
         "enabled": true,
         "path": "/path/to/recovered/skills/food-order"
       }
     }
   }
   ```

### What the AI Learns

- **Setup:** Country config, login (password or Chrome session)
- **Find orders:** `ordercli foodora history --limit 10`
- **Preview reorder:** `ordercli foodora reorder <orderCode>` (no changes)
- **Place reorder:** `ordercli foodora reorder <orderCode> --confirm` (only after user says yes)
- **Track ETA:** `ordercli foodora orders --watch`

### Safety

The skill explicitly instructs the AI to NEVER run `--confirm` without explicit user approval. Preview-first workflow is enforced.
