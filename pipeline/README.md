# Pipeline

<metadata>
purpose: Forward-only pipeline for work-in-progress -- from raw research through drafts to finished deliverables
audience: AI agents and Bespoke Woodcraft Studio team members creating content deliverables
summary: Three-stage forward-only pipeline that turns raw research into finished content for woodworking and maker clients.
token_estimate: small
related: docs/context-routing.md
domain: workflow
confidence: canonical
context_tier: 1
last_updated: 2026-02-18
</metadata>

Where work happens. Files flow forward: research/ -> scratchpad/ -> outputs/. Never backward.

**The rule:** New material enters through research/. Working drafts live in scratchpad/. Finished deliverables graduate to outputs/. A file should never move backward in this chain.

## Stages

| Stage | Directory | What Goes Here | What "Done" Means |
|-------|-----------|---------------|-------------------|
| Input | `research/` | Raw research -- audience analysis, platform trends, competitor content audits, client industry deep dives, keyword research | Material is organized and ready to inform a deliverable |
| Processing | `scratchpad/` | Drafts -- video scripts, blog post drafts, social media calendars, content strategy outlines, client proposals | Document is polished enough to share with the client or publish |
| Output | `outputs/` | Finished deliverables -- final video scripts, published blog posts, approved content calendars, delivered strategy decks | Delivered to client or published externally |

## Process Traces

When a skill or workflow produces output, it should include a process trace in the file's metadata:

```xml
<metadata>
source_skill: write-content
input_files: [pipeline/research/dovetail-video-trends-brief-v1.md]
output_stage: scratchpad
last_updated: 2026-02-18
</metadata>
```

This makes the pipeline auditable -- you can trace any output back to its source material and the skill that produced it.

## Why Forward-Only

- **Clarity:** You always know where a file stands by which directory it lives in.
- **History:** If a finished deliverable needs revision, create a new version in scratchpad/ rather than moving it backward.
- **Traceability:** Process traces link outputs to their source research and the skill that transformed them.
