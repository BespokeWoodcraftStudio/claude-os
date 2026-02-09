# Pipeline

Where work happens. Files flow forward: research/ → scratchpad/ → outputs/. Never backward.

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
source_skill: research-to-study-guide
input_files: [pipeline/research/topic-raw-notes.md]
output_stage: scratchpad
last_updated: 2026-02-07
</metadata>
```

This makes the pipeline auditable — you can trace any output back to its source material and the skill that produced it.
