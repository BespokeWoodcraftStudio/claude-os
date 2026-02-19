# Pipeline Test

Verify that the research pipeline flow works correctly.

---

## Prerequisites

Before running this test, you must have:
- The `pipeline/` directory structure in place (research/, scratchpad/, outputs/)
- Filled in `sources/people-index.md` and `sources/sources-index.md` (recommended but not required)

---

## Test 1: Research Task

### Prompt

> Research [any topic relevant to your company] and create a research brief.

### What Should Load

- `agent-docs/research-agent.md` (if using task routing)
- `knowledge/README.md`
- `sources/people-index.md` and `sources/sources-index.md`

### What Good Looks Like

- [ ] **Saves to correct location** — `pipeline/research/[topic]-research-v1.md`
- [ ] **Follows template** — uses the research-brief-template format
- [ ] **Includes metadata** — has the `<metadata>` block with proper fields
- [ ] **Cites sources** — doesn't invent URLs or statistics
- [ ] **Uses trusted sources** — references sources from your sources-index.md when available
- [ ] **Includes confidence levels** — rates the quality of its findings

---

## Test 2: Pipeline Flow

### Prompt

> Take the research from [previous test] and create a working draft.

### What Should Load

- The research brief from Test 1
- Voice guide for writing style

### What Good Looks Like

- [ ] **Saves to scratchpad/** — not to research/ or outputs/
- [ ] **References the research** — builds on the brief, doesn't start from scratch
- [ ] **Forward-only** — doesn't modify the research brief
- [ ] **Includes status** — marks as draft, notes what's incomplete
- [ ] **Uses your voice** — applies the writing style guide

---

## Test 3: Deliverable Creation

### Prompt

> Finalize the draft into a finished deliverable.

### What Should Load

- The working draft from Test 2
- Voice guide

### What Good Looks Like

- [ ] **Saves to outputs/** — the final stage
- [ ] **Includes lineage metadata** — notes where this came from (source_files, pipeline stage)
- [ ] **Polished** — noticeably more refined than the scratchpad version
- [ ] **Forward-only** — doesn't modify the scratchpad draft
- [ ] **Complete** — no TODO markers or incomplete sections

---

## Test 4: Knowledge Base Storage

### Prompt

> This research is worth keeping. Save it as a study guide in the knowledge base.

### What Good Looks Like

- [ ] **Routes to correct subdirectory** — `knowledge/content/`, `knowledge/building/`, `knowledge/product/`, or `knowledge/domain/` based on topic
- [ ] **Follows study guide template** — structured with proper sections
- [ ] **Includes metadata** — especially `domain`, `confidence`, and `context_tier`
- [ ] **Updates INDEX.md** — adds the new file to the directory's index
