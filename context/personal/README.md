<!-- TEMPLATE: Replace all [BRACKETED] placeholders. Delete this comment when done. -->

# Personal Context

<metadata>
purpose: Directory overview for founder personal context files
audience: AI agents, team members, collaborators
summary: Context files for the founder that inform AI personas and personalize agent behavior
token_estimate: small
depends_on: none
related: context/roles/, context/voice/
domain: company
confidence: canonical
context_tier: 0
last_updated: 2026-02-18
</metadata>

---

Context files for the founder of [YOUR COMPANY]. These inform AI personas and calibrate agent behavior to produce personalized, relevant output.

## What This Is

The personal directory contains information about the founder that helps AI agents:
- Communicate in a way that matches founder preferences
- Frame recommendations the way the founder processes them
- Understand decision-making patterns and cognitive style
- Respect boundaries, triggers, and energy patterns
- Calibrate tone for direct interactions

## Files

| File | What It Does |
|------|-------------|
| [founder-user-manual-template-v1.md](founder-user-manual-template-v1.md) | 10-section operating manual: communication, decisions, feedback, stress, values, and personal context |

## When to Load

- **Working directly with the founder**: Load the user manual before any interaction where the AI agent is producing output for or advising the founder
- **Advisory roles**: The `depends_on` field in advisory role files (performance coach, consigliere) points to the user manual
- **Writing in the founder's voice**: Load alongside `context/voice/` for social media and thought leadership content

## Privacy Note

This directory contains sensitive personal information. Files here are marked `sensitivity: leadership-only`. Treat them accordingly — they inform AI behavior but should not be shared broadly or quoted in external outputs.

---

See [INDEX.md](INDEX.md) for a complete file listing.
