# Pipeline

<metadata>
purpose: Forward-only pipeline for work-in-progress — from raw research through drafts to finished deliverables
audience: AI agents and team members creating deliverables
summary: Three-stage forward-only pipeline that turns raw research into finished work.
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
| Input | `research/` | Raw research, competitive briefs, data gathering | Material is organized and ready to inform a deliverable |
| Processing | `scratchpad/` | Drafts, working docs, experiments | Document is polished enough to share or publish |
| Output | `outputs/` | Finished deliverables, published content | Delivered to client or published externally |

## Process Traces

When a skill or workflow produces output, it should include a process trace in the file's metadata:

```xml
<metadata>
source_skill: [FILL IN: skill that produced this file]
input_files: [pipeline/research/topic-raw-notes.md]
output_stage: scratchpad
last_updated: 2026-02-18
</metadata>
```

This makes the pipeline auditable — you can trace any output back to its source material and the skill that produced it.

## Why Forward-Only

- **Clarity:** You always know where a file stands by which directory it lives in.
- **History:** If a finished deliverable needs revision, create a new version in scratchpad/ rather than moving it backward.
- **Traceability:** Process traces link outputs to their source research and the skill that transformed them.
