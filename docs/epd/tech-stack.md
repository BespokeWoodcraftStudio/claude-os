# Tech Stack

<metadata>
purpose: Documents Bespoke Woodcraft Studio's production tech stack and tools
audience: Production team, new hires, leadership
summary: Overview of the cameras, editing software, platforms, and tools that power Bespoke Woodcraft Studio's content production.
token_estimate: medium
depends_on: []
related: dev-process.md, ../products/product-overview-template.md
domain: product
confidence: current
context_tier: 2
last_updated: 2026-02-18
</metadata>

---

## Overview

Bespoke Woodcraft Studio runs a hybrid production stack — professional camera and audio gear paired with modern editing software, cloud-based collaboration tools, and AI-assisted workflows. Our philosophy is to invest in tools that speed up delivery without sacrificing production quality. Everything is built around getting from raw footage to published content as fast as possible.

---

## Core Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| **Cameras** | Sony FX6, Sony A7IV, iPhone 15 Pro (B-roll/BTS) | FX6 for hero shoots, A7IV for multi-angle, iPhone for quick social clips |
| **Audio** | Rode Wireless Pro, Rode NTG5 shotgun mic | Wireless for in-shop dialogue, shotgun for voiceover and ambient |
| **Editing (Video)** | Adobe Premiere Pro, DaVinci Resolve | Premiere for primary edits, Resolve for color grading |
| **Editing (Graphics)** | Adobe After Effects, Photoshop, Canva | After Effects for motion graphics, Canva for quick social assets |
| **Cloud Storage** | Google Drive, Frame.io | Google Drive for file organization, Frame.io for video review and approval |
| **Publishing** | YouTube Studio, Meta Business Suite, TikTok Creator Tools | Native platform tools for scheduling and analytics |

---

## Key Services & Platforms

| Service | Purpose | Owner |
|---------|---------|-------|
| Frame.io | Client video review, timestamped feedback, approval workflows | Production Lead |
| Notion | Project management, editorial calendars, client dashboards | Operations |
| Google Workspace | File storage, docs, client communication | All team members |

---

## Asset Organization

All project assets follow a folder-per-client, folder-per-project structure on Google Drive. Raw footage, exports, and final deliverables are kept separate.

| Location | What It Contains |
|-----------|------------------|
| `Clients/[Client Name]/Raw/` | Raw footage, audio files, and photos from shoots |
| `Clients/[Client Name]/Projects/[Project Name]/` | Premiere/Resolve project files, exports, and deliverables |

---

## AI & Automation Tools

We use AI tools to accelerate production without replacing creative judgment. AI handles the repetitive parts so the team can focus on storytelling and craft.

- **Transcript generation:** Whisper / Descript for auto-transcription of interview and voiceover footage
- **Caption and subtitle generation:** Descript and CapCut for quick captioning on short-form content
- **Content repurposing:** Opus Clip and manual editing to pull short clips from long-form videos
- **Copywriting assistance:** Claude for drafting social captions, video descriptions, and newsletter copy (always reviewed and edited by a human)

---

## Production Tools

| Tool | Purpose |
|------|---------|
| Descript | Transcription, rough cuts, podcast editing |
| CapCut | Quick short-form video edits and templates |
| Epidemic Sound | Royalty-free music library for video soundtracks |

---

## Key Production Decisions

### Premiere Pro as Primary NLE

**Context:** The team needed a single primary editing platform for consistency across editors.
**Decision:** Adobe Premiere Pro is the default NLE for all video projects.
**Rationale:** Industry standard, strong integration with After Effects and Photoshop, and the broadest pool of freelance editors are fluent in it. DaVinci Resolve is used as a secondary tool specifically for color grading.
