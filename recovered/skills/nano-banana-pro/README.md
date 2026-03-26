# nano-banana-pro Skill — Recovered Feature

**Removed in:** OpenClaw v2026.3.22
**Recovered by:** DEEP-IOS

## What It Does

Generate or edit images using Google's Gemini 3 Pro Image API (codenamed "Nano Banana Pro"). Supports text-to-image generation, single-image editing, and multi-image composition (up to 14 input images).

## Requirements

- `uv` (Python package runner) — Install via Homebrew: `brew install uv`
- `GEMINI_API_KEY` environment variable — Get from [Google AI Studio](https://ai.google.dev/)

## Installation

1. Copy files to your skills directory:
   ```bash
   mkdir -p ~/.openclaw/skills/nano-banana-pro/scripts
   cp SKILL.md ~/.openclaw/skills/nano-banana-pro/SKILL.md
   cp generate_image.py ~/.openclaw/skills/nano-banana-pro/scripts/generate_image.py
   ```

2. Set your API key:
   ```bash
   export GEMINI_API_KEY="your-key-here"
   ```

## Standalone Usage (without OpenClaw)

```bash
# Generate an image
uv run generate_image.py --prompt "a sunset over mountains" --filename "sunset.png" --resolution 1K

# Edit an image
uv run generate_image.py --prompt "make the sky purple" --filename "edited.png" -i "input.png" --resolution 2K

# Multi-image composition (up to 14 images)
uv run generate_image.py --prompt "combine into a collage" --filename "collage.png" -i img1.png -i img2.png -i img3.png
```

## Options

| Flag | Description |
|------|-------------|
| `--prompt`, `-p` | Image description/prompt (required) |
| `--filename`, `-f` | Output filename (required) |
| `--input-image`, `-i` | Input image path (repeatable, up to 14) |
| `--resolution`, `-r` | `1K` (default), `2K`, or `4K` |
| `--api-key`, `-k` | Override GEMINI_API_KEY env var |

## Notes

- Resolution auto-detects from input image dimensions when editing
- The script prints a `MEDIA:` line that OpenClaw uses to auto-attach images on chat providers
- Python dependencies (`google-genai`, `pillow`) are auto-installed by `uv`
