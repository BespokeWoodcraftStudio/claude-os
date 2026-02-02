# growthx-ceo-os

GrowthX's organizational knowledge base. Everything we know about how we work, who we serve, and how we write—codified for humans and AI.

---

## Why This Exists

Three problems this solves:

1. **Onboarding takes too long.** New hires spend weeks absorbing tribal knowledge. This repository gets them productive faster.

2. **AI can't match our voice.** Generic AI output sounds generic. Feed it this context, and it writes like us.

3. **Knowledge lives in heads.** When people leave, knowledge leaves. This captures it.

The goal: anyone (human or AI) can understand GrowthX and produce on-brand work by reading this repository.

---

## Directory Structure

```
growthx-ceo-os/
├── company-context/           # How GrowthX works as a business
│   └── archive/               # Outdated versions of company docs
├── writing-guidelines/        # Voice, tone, style for all content
│   └── archive/               # Outdated versions of writing docs
├── knowledge/                 # Reference materials and study guides
│   └── archive/               # Outdated versions
├── outputs/                   # Completed research and deliverables
├── raw-transcripts/           # Unprocessed source material
├── prompts/                   # Reusable AI prompt templates
├── personal-context/          # Individual contributor context
├── docs/                      # Project meta-documentation
├── claude.md                  # AI context file
└── readme.md                  # You are here
```

Each content directory has an `/archive` subdirectory for storing outdated file versions.

### company-context/

The business operating system. Start here to understand GrowthX.

| File | What It Covers |
|------|----------------|
| `company-vision-and-strategy-v1.md` | Vision, moats, flywheel, why we exist |
| `business-overview-for-onboarding-v1.md` | New hire intro, two engines, customer journey overview |
| `ideal-customer-profile-v1.md` | ICP criteria, scoring system, red flags |
| `customer-lifecycle-phases-v1.md` | Sales → Strategy Sprint → Growth Execution |
| `delivery-teams-and-operations-v1.md` | Roles, pods, capacity planning, system mindset |
| `client-success-metrics-v1.md` | Five dimensions, leading/lagging signals |
| `business-model-and-economics-v1.md` | Unit economics, ARR math, margins |
| `checkthat-product-vision-v1.md` | CheckThat strategy, open index vision |
| `checkthat-organic-growth-strategy-v1.md` | SEO architecture, entity model |
| `checkthat-pricing-and-monetization-v1.md` | Tiers, pricing, competitive analysis |

### writing-guidelines/

How we write. Essential for content creation.

| File | What It Covers |
|------|----------------|
| `writing-style-context-v2.md` | **The definitive style guide.** Voice, principles, examples. |
| `writing-style-context-v1.md` | Earlier version (reference only) |
| `writing-style-raw.md` | Source notes |

### knowledge/

Reference materials for craft improvement.

| File | What It Covers |
|------|----------------|
| `elements-of-style-study-guide.md` | Strunk & White distilled |
| `writing-craft-study-guide.md` | Writing craft principles |

### outputs/

Completed work product. Examples of what good looks like.

### raw-transcripts/

Unprocessed interview and meeting transcripts. Primary source material before synthesis.

### prompts/

Reusable prompt templates for AI workflows.

### personal-context/

Context files for individual contributors.

---

## How to Use This

### For Onboarding

Read in this order:
1. `company-context/company-vision-and-strategy-v1.md`
2. `company-context/business-overview-for-onboarding-v1.md`
3. `company-context/ideal-customer-profile-v1.md`
4. `writing-guidelines/writing-style-context-v2.md`

That covers 80% of what you need to know.

### For AI Content Generation

1. Load `claude.md` as system context
2. Load `writing-guidelines/writing-style-context-v2.md`
3. Load relevant `company-context/` files based on the task
4. Generate content

### For Reference

Search the repository. Most questions about "how we do X" have an answer in `company-context/`.

---

## File Naming & Versioning

### Naming Convention

All context files follow this pattern: `descriptive-name-v1.md`

- **Lowercase** with hyphens between words
- **Descriptive names** that explain the content
- **Version suffix** (`-v1`, `-v2`) on all context files

### File Header

Every context file should have a metadata block at the top:

```markdown
<metadata>
purpose: What this doc is for
audience: Who should read this
related: Links to related docs
last_updated: 2026-02-01
</metadata>
```

### Version Management

| Change Type | What to Do |
|-------------|------------|
| **Minor updates** | Edit in place, update `last_updated` in header |
| **Major changes** | Create new version (`-v2`), move old to `/archive` |

**Examples:**
- Fixing typos, updating a metric → Minor (edit in place)
- Restructuring a doc, changing strategy → Major (new version)

---

## How to Contribute

### Adding New Content

1. **Pick the right directory.** Business docs go in `company-context/`. Writing rules go in `writing-guidelines/`. Research goes in `knowledge/`.

2. **Follow the naming convention.** `descriptive-name-v1.md` format. Lowercase, hyphens, version suffix.

3. **Add the metadata header.** Purpose, audience, related docs, last_updated.

4. **Follow the writing style.** Read `writing-style-context-v2.md` before writing anything.

5. **Use the structure pattern.** Lead > Decompose > Connect > Summarize. End with "The Bottom Line."

### Updating Existing Content

1. **Minor changes:** Edit in place, update `last_updated` in the header.

2. **Major changes:** Create a new version (`-v2`), move the old file to `/archive`.

3. **Check cross-references.** Other docs may link to what you're changing. Update them.

### Quality Standards

Before committing:
- Does it lead with the point?
- Would you say this to a friend?
- Can you cut 20% without losing meaning?
- Does every paragraph earn its place?

---

## Maintenance

### What to Review Quarterly

- `company-context/` files for accuracy (business evolves)
- `writing-guidelines/` for completeness
- Remove outdated `outputs/`

### What Stays Evergreen

- `knowledge/` reference materials
- Core `writing-guidelines/` principles

---

## The Bottom Line

This repository is how we scale knowledge. The more complete and current it is, the faster new people ramp and the better AI performs.

When in doubt: write it down, put it here, follow the style guide.
