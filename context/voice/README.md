<!-- TEMPLATE: Replace all [BRACKETED] placeholders. Delete this comment when done. -->

# Writing Guidelines

<metadata>
purpose: Directory overview for voice and style context files
audience: AI agents, content creators, writers
summary: Voice, tone, and style standards for all [YOUR COMPANY] content
token_estimate: small
depends_on: none
related: context/roles/, context/personal/
domain: writing
confidence: canonical
context_tier: 0
last_updated: 2026-02-18
</metadata>

---

Voice, tone, and style standards for all [YOUR COMPANY] content. The definitive guide for how we write.

## What This Is

This directory contains the prescriptive writing rules that tell AI agents and human writers HOW to write for [YOUR COMPANY]. The writing style guide is the single most important context file for any content generation task.

## Files

| File | What It Does |
|------|-------------|
| [writing-style-context-v1.md](writing-style-context-v1.md) | **The definitive style guide.** Voice, principles, structure patterns, domain adaptations, and examples. Start here for any writing task. |
| [social-media-style-guide-template-v1.md](social-media-style-guide-template-v1.md) | Social media voice guide. Hooks, tone calibration, platform-specific rules, post templates, and engagement strategy. |

## Archive

| File | Summary |
|------|---------|
| archive/ | Previous versions (reference only) |

## When to Load

- **Any writing task**: Load `writing-style-context-v1.md` first. It calibrates voice before content generation.
- **Social media content**: Load both the writing style guide AND the social media guide.
- **Domain-specific writing**: The writing style guide includes domain adaptation tables (finance, technical, customer-facing, social) that modify the base voice per context.

## How These Files Work Together

The writing style guide defines the base voice. The social media guide extends it for platform-specific constraints. Always load the base guide first, then layer the social media guide on top when writing for social platforms.

---

See [INDEX.md](INDEX.md) for a complete file listing.
