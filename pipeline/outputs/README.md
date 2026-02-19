<!-- TEMPLATE: Replace all [BRACKETED] placeholders. Delete this comment when done. -->

# Outputs -- Pipeline Stage 3 (Output)

<metadata>
purpose: Finished deliverables and completed work — final stage of the pipeline
audience: AI agents filing completed work, team members reviewing deliverables
summary: Final destination for completed deliverables with full lineage metadata.
token_estimate: small
related: pipeline/research/README.md, pipeline/scratchpad/README.md, docs/context-routing.md
domain: workflow
confidence: canonical
context_tier: 2
last_updated: 2026-02-18
</metadata>

Finished work lands here. Delivered to client, published, or completed.

## What Goes Here

- Completed research deliverables
- Published content and articles
- Client deliverables (reports, analyses)
- Finalized datasets and databases

## What "Done" Means

The file has been delivered, published, or otherwise finalized. It becomes reference material.

## Flow

```
pipeline/research/ -> pipeline/scratchpad/ -> YOU ARE HERE
   (raw input)         (working drafts)       (finished work)
```

## Rules

- Files arrive from scratchpad/ when they're complete
- Never move files backward to scratchpad/ or research/
- If a deliverable needs major revision, create a new version in scratchpad/ instead
- Outputs may be referenced by other docs but should not be edited in place

## File Naming

Use descriptive names with version suffix: `topic-deliverable-v1.md`
