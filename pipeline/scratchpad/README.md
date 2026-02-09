# Scratchpad — Pipeline Stage 2 (Processing)

<metadata>
purpose: Work-in-progress documents and drafts — second stage of the pipeline
audience: AI agents creating deliverables, Marcel reviewing drafts
related: pipeline/research/README.md, pipeline/outputs/README.md, docs/context-routing.md
domain: research
confidence: canonical
sensitivity: internal
context_tier: 2
last_updated: 2026-02-09
</metadata>

Working drafts live here. Documents being shaped, iterated on, reviewed.

## What Goes Here

- Draft documents being written or edited
- Working notes and experiments
- Study guide drafts before finalization
- Meeting prep and planning docs
- Architecture guides and design docs

## What "Done" Means

Document is polished enough to share, publish, or deliver. When that happens, it graduates to `pipeline/outputs/`.

## Flow

```
pipeline/research/ → YOU ARE HERE → pipeline/outputs/
   (raw input)       (working drafts)    (finished work)
```

## Process Traces

When a skill creates a file here, include a process trace in the metadata:

```xml
<metadata>
source_skill: research-to-study-guide
input_files: [pipeline/research/topic-raw-notes.md]
output_stage: scratchpad
last_updated: 2026-02-09
</metadata>
```

## Rules

- Drafts come from research/ or are created directly by skills
- Files may also be promoted to `knowledge/` or `docs/` instead of outputs/
- Never move files backward to research/
- Delete or archive experiments that didn't lead anywhere
