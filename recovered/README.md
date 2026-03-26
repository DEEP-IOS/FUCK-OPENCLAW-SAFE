# Recovered Features

**Author:** DEEP-IOS

Features that OpenClaw removed from the codebase entirely. These cannot be restored by patching dist files or changing config — the code is gone. This directory contains standalone reimplementations, preserved source files, and reference documentation.

---

## Overview

| Feature | Type | Removed In | Status |
|---------|------|------------|--------|
| [soul-evil](./soul-evil/) | Standalone JS module | v2026.2.13 | Full reimplementation |
| [browser-control](./browser-control/) | API documentation + wrapper | v2026.1.29 | Reference + compiled source |
| [food-order](./skills/food-order/) | Skill (SKILL.md) | v2026.2.22 | Direct copy |
| [nano-banana-pro](./skills/nano-banana-pro/) | Skill (SKILL.md + Python) | v2026.3.22 | Direct copy |
| [auto-reply](./auto-reply/) | Reference guide | v2026.1.8 | Documentation only |
| auth-none | Patcher patch | v2026.1.29 | Added to `patcher.js` |

---

## Installation

### soul-evil — Alternate persona hook

Standalone JS module, zero dependencies. Swaps SOUL.md with SOUL_EVIL.md on a schedule or by random chance.

```bash
cp -r recovered/soul-evil/ /your/project/
```

```js
import { decideSoulEvil, applySoulEvilOverride } from "./soul-evil/index.js";
```

See [soul-evil/README.md](./soul-evil/README.md) for full API.

### browser-control — Browser automation server

The compiled source is preserved at `old-versions/v2026.1.29b1/dist/browser/`. The README documents all REST API endpoints.

See [browser-control/README.md](./browser-control/README.md) for the full API reference.

### food-order — Foodora ordering skill

Copy the SKILL.md to your skills directory:

```bash
mkdir -p ~/.openclaw/skills/food-order
cp recovered/skills/food-order/SKILL.md ~/.openclaw/skills/food-order/
```

Requires `ordercli`: `go install github.com/steipete/ordercli/cmd/ordercli@latest`

### nano-banana-pro — Image generation skill

Copy the SKILL.md and Python script:

```bash
mkdir -p ~/.openclaw/skills/nano-banana-pro/scripts
cp recovered/skills/nano-banana-pro/SKILL.md ~/.openclaw/skills/nano-banana-pro/
cp recovered/skills/nano-banana-pro/generate_image.py ~/.openclaw/skills/nano-banana-pro/scripts/
```

Requires `uv` and `GEMINI_API_KEY`.

### auto-reply — Chat auto-reply dispatcher

Too tightly coupled to repackage. See [auto-reply/README.md](./auto-reply/README.md) for architecture docs, source file locations, and workarounds.

### auth-none — Gateway auth bypass

Already integrated into the patcher. Run:

```bash
fuck-openclaw-safe patch
```

The patch re-enables `auth: "none"` as a valid gateway auth mode.

---

## Directory Structure

```
recovered/
  README.md                          (this file)
  soul-evil/
    index.js                         Pure JS reimplementation
    README.md                        Usage docs
  browser-control/
    README.md                        Full API reference
    wrapper.js                       Quick reference script
  skills/
    food-order/
      SKILL.md                       Original skill definition
      README.md                      Install guide
    nano-banana-pro/
      SKILL.md                       Original skill definition
      generate_image.py              Image generation script
      README.md                      Install guide
  auto-reply/
    README.md                        Architecture reference + source locations
```
