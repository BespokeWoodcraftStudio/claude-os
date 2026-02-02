# GrowthX CEO OS

This is GrowthX's organizational knowledge base. Use it to understand the company, match our voice, and generate on-brand content.

---

## What We Do

GrowthX runs two engines:

- **GrowthX (services)**: B2B content marketing. $200k+/year engagements. The main revenue driver.
- **CheckThat (software)**: Open AI visibility index for B2B. The strategic bet.

We help B2B tech companies grow through content. Content is the atomic unit. Websites are the destination.

---

## Directory Map

| Directory | Purpose | When to Use |
|-----------|---------|-------------|
| `company-context/` | Business docs: strategy, ICP, delivery model, pricing | Understanding GrowthX as a business |
| `writing-guidelines/` | Voice, tone, style rules | Any content generation |
| `knowledge/` | Reference materials: Elements of Style, writing craft | Deep craft questions |
| `outputs/` | Research deliverables, completed work | Examples of finished work |
| `raw-transcripts/` | Unprocessed interview/meeting notes | Primary source material |
| `prompts/` | Reusable prompt templates | Structured AI workflows |
| `personal-context/` | Individual contributor context | Person-specific work |
| `docs/` | Project documentation | Meta-documentation |
| `roles/` | Executive AI personas (COO, CFO, CTO, etc.) | Decision support, task execution as a specific role |
| `*/archive/` | Outdated versions of files | Historical reference only |

---

## File Naming & Versioning

**Naming convention:** `descriptive-name-v1.md`
- Lowercase, hyphens between words
- Version suffix (`-v1`, `-v2`) for all context files
- Descriptive names that explain the content

**Version management:**
- **Minor updates:** Edit in place, update `last_updated` in metadata header
- **Major changes:** Create new version (`-v2`), move old version to `/archive`

**Each directory has an `/archive` subdirectory** for outdated files.

---

## Key Files

**For company understanding:**
- `company-context/company-vision-and-strategy-v1.md` - Vision and strategy
- `company-context/business-overview-for-onboarding-v1.md` - Business model overview
- `company-context/ideal-customer-profile-v1.md` - ICP and qualification
- `company-context/checkthat-product-vision-v1.md` - CheckThat product vision

**For writing:**
- `writing-guidelines/writing-style-context-v2.md` - The definitive style guide

---

## Writing Rules

**Voice:** Direct, clear, real. Like a smart friend explaining something important.

**Style anchors:** Paul Graham (conversational precision), Naval (compressed wisdom), Derek Sivers (pithy contrarian), Morgan Housel (storytelling clarity), Hemingway (raw simplicity).

**Core principles:**
1. Lead with the point (so what?)
2. Build from first principles
3. Maximum clarity, minimum words
4. Write like you talk
5. Stay raw (authentic over polished)
6. Ground in specifics (numbers, examples, stories)

**Avoid:** Corporate jargon (leverage, synergize), filler phrases (it's important to note), passive voice, em dashes, flowery language.

**Quality checks:**
- Is the main point in the first two sentences?
- Would you say this to a friend?
- Can you cut 20% without losing meaning?

---

## Behavioral Guidelines

**When generating content:**
1. Always reference `writing-style-context-v2.md` first
2. Match the tone of existing company docs
3. Use active voice and strong verbs
4. One idea per sentence
5. Open with specifics, not vague statements

**When answering questions about GrowthX:**
1. Check `company-context/` for the authoritative answer
2. Quote or reference specific docs when possible
3. If information conflicts, prefer newer docs

**When creating new company content:**
1. Follow the structure pattern: Lead > Decompose > Connect > Summarize
2. Include "The Bottom Line" section at end
3. Use tables for comparisons
4. Keep paragraphs short (2-4 sentences max)

**What NOT to do:**
- Don't invent facts about GrowthX not in these docs
- Don't use buzzwords we explicitly avoid
- Don't generate legal, compliance, or financial content without flagging
- Don't assume context from outside this repository
