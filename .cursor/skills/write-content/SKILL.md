---
name: write-content
description: Write and review content using your company's voice and style. Use when creating blog posts, newsletters, thought leadership, product copy, or when the user asks to write, draft, edit, or review content.
---

# Write Content

Write like a smart friend explaining something important. Direct, clear, real.

## Inputs / Outputs

| | What | Example |
|---|---|---|
| **Input** | Topic, draft, or content brief from user | "Write a LinkedIn post about [topic]" |
| **Context** | `context/voice/writing-style-context-v1.md` (always load) | -- |
| **Context** | `context/voice/social-media-style-guide-template-v1.md` (if social media) | -- |
| **Context** | Relevant `docs/` files for subject matter | Product docs, company info |
| **Output** | Finished content or review with flags | Delivered inline or saved to `pipeline/outputs/` |

## Quick Start

1. Read the style guide: [writing-style-context-v1.md](../../context/voice/writing-style-context-v1.md)
2. Apply these essentials:
   - Lead with the point (main idea in first two sentences)
   - Maximum clarity, minimum words
   - Write like you talk
   - Ground in specifics (numbers, examples, stories)

## Writing Workflow

### Creating Content

1. **Draft fast** — Get ideas out. Quality comes later
2. **Structure** — Lead > Decompose > Connect > Summarize
3. **Rewrite** — Cut 50% on first pass. Every sentence earns its place
4. **Quality check** — Run the tests below

### Reviewing Content

Flag issues using:
- **Must fix**: Buried lead, jargon, passive voice, abstractions
- **Improve**: Verbose, weak verbs, missing specifics
- **Optional**: Style polish, tighter phrasing

## Quality Checks

Before finishing, verify:

- [ ] Main point in first two sentences?
- [ ] Would you say this to a friend?
- [ ] Can you cut 20% without losing meaning?
- [ ] Concrete details instead of abstractions?
- [ ] Active voice throughout?

## Voice Essentials

**Channel the style anchors defined in your writing style guide.** If none are set yet, aim for:
- Conversational precision (Paul Graham)
- Compressed wisdom (Naval)
- Storytelling clarity (Morgan Housel)
- Raw simplicity (Hemingway)

**Avoid:**
- Corporate jargon (leverage, synergize, circle back)
- Filler phrases (it's important to note, in order to)
- Passive voice when active works
- Em dashes — use periods instead

## Example Transformation

**Weak:**
> After careful analysis of market conditions, taking into account various stakeholder perspectives, we've determined that a strategic pivot may be warranted.

**Strong:**
> We need to pivot. The market shifted and our current approach isn't working.

## Deep Reference

For comprehensive guidance:
- **Style rules**: [writing-style-context-v1.md](../../context/voice/writing-style-context-v1.md) — Voice, principles, examples
- **Craft foundations**: [writing-craft-study-guide-v1.md](../../knowledge/content/writing-craft-study-guide-v1.md) — Writing masters and techniques
