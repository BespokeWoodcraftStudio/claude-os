# Executive AI Roles

<metadata>
purpose: Index of AI persona roles for decision support and task execution
audience: Marcel / founder
last_updated: 2026-02-01
</metadata>

---

## What This Is

This folder contains AI persona definitions for key executive roles. Reference a role file (e.g., `@context/roles/coo-v1.md`) to have Claude think and act as that executive.

Each role provides:
- **Leaders to channel** — Real operators (and characters) whose thinking patterns to emulate
- **Decision frameworks** — Proven frameworks for the role's key decisions
- **Mental models** — How great leaders in this role think about problems
- **Essential reading** — Books, podcasts, and articles to deepen understanding
- **Voice and approach** — How the persona communicates
- **Context to reference** — Which company docs inform decisions

---

## The Inner Circle (Personal Support)

These roles serve YOU directly as founder/CEO.

| Role | File | Core Focus | Inspired By |
|------|------|------------|-------------|
| **Performance Coach** | `performance-coach-v1.md` | Peak performance, psychological insight, founder mental health | Dr. Wendy Rhoades (Billions), Denise Shull, Tony Robbins |
| **Consigliere** | `consigliere-v1.md` | Fierce loyalty, ruthless execution, uncomfortable truths | Mike "Wags" Wagner (Billions), Tom Hagen |

**When to use the Inner Circle:**
- "I need to talk through something I can't tell anyone else" → Performance Coach
- "What's the uncomfortable truth I need to hear?" → Consigliere
- "I'm stuck and I don't know why" → Performance Coach
- "Handle this for me — I don't want to be involved" → Consigliere

---

## The Executive Team (Functional Expertise)

These roles provide expertise in specific business functions.

| Role | File | Core Focus | Key Leaders |
|------|------|------------|-------------|
| **COO** | `coo-v1.md` | Operations, capacity, delivery efficiency, systems | Keith Rabois, Claire Hughes Johnson, Andy Grove |
| **CFO** | `cfo-v1.md` | Unit economics, cash flow, pricing | Amy Hood, Ruth Porat, Warren Buffett |
| **CTO** | `cto-v1.md` | Product (CheckThat), platform, AI workflows | Werner Vogels, Will Larson, Greg Brockman |
| **CRO** | `cro-v1.md` | Sales, pipeline, revenue growth | Mark Roberge, Aaron Ross, John McMahon |
| **Chief of Staff** | `chief-of-staff-v1.md` | Strategic priorities, cross-functional alignment | James Baker, Rahm Emanuel, Kevin Fishner |
| **VP People** | `vp-people-v1.md` | Hiring, org design, culture | Patty McCord, Laszlo Bock, Molly Graham |
| **CMO** | `cmo-v1.md` | Brand, demand generation, marketing strategy | Chris Walker, Dave Gerhardt, April Dunford |
| **AEO Expert** | `aeo-expert-v1.md` | AI visibility, AEO methodology, prompt strategy, CheckThat domain | Overthink Group, Rand Fishkin, Conductor, Lily Ray |

---

## How to Use

**For personal support:**
```
@context/roles/performance-coach-v1.md - I'm in my head about a decision and can't move forward. Help me see what's going on.
```

**For uncomfortable truth:**
```
@context/roles/consigliere-v1.md - What's the thing no one is telling me about this situation?
```

**For functional expertise:**
```
@context/roles/coo-v1.md - Review our capacity plan for Q2. Do we have enough resources?
```

**For multiple perspectives:**
```
@context/roles/coo-v1.md @context/roles/cfo-v1.md - We're considering hiring 3 more editors. Walk me through the ops and financial implications.
```

**For AEO and AI visibility strategy:**
```
@context/roles/aeo-expert-v1.md - Audit this brand's AI visibility. Where are the gaps and what content should we create?
```

**To channel a specific leader:**
```
@context/roles/cro-v1.md - Think through this deal like Mark Roberge would.
```

**For the Billions approach:**
```
@context/roles/performance-coach-v1.md - Give me the Wendy Rhoades perspective on this.
@context/roles/consigliere-v1.md - Give me the Wags perspective. What would we do if we weren't being diplomatic?
```

---

## Role Comparison: Inner Circle vs. Executive Team

| Dimension | Inner Circle | Executive Team |
|-----------|--------------|----------------|
| **Orientation** | Serves YOU personally | Serves the FUNCTION |
| **Focus** | Your performance, your decisions | Business outcomes |
| **Loyalty** | To you as a person | To the company/role |
| **Voice** | Personal, direct, sometimes uncomfortable | Professional, expert, analytical |
| **When to use** | When YOU are the bottleneck | When the BUSINESS needs expertise |

---

## What's Included in Each Role

**Inner Circle roles contain:**
- Character archetype and inspiration
- Coaching/advising philosophy
- Mental models for personal effectiveness
- Voice and communication style
- Specific interventions for common founder struggles
- Example triggers

**Executive Team roles contain:**
- Leaders to channel (with why to study them)
- Decision frameworks with GrowthX applications
- Mental models for how great operators think
- Essential reading (books, podcasts, articles)
- Voice and signature questions
- Example triggers

---

## Research Outputs

Detailed research for each role is saved in `/outputs`:
- `wendy-rhoades-character-research-v1.md` — Deep character study
- `wags-character-research-v1.md` — Deep character study
- `cfo-research-summary-v1.md`
- `cto-research-for-ai-persona-v1.md`
- `cro-research-for-ai-persona-v1.md`
- `cmo-research-summary-v1.md`
- `chief-of-staff-research-v1.md`

---

## Maintaining Roles

- **Minor updates:** Edit the role file directly, update `last_updated`
- **Major changes:** Create a new version (`-v2`), move old version to `/archive`
- **Adding new roles:** Follow the template structure in existing files

---

## Role Composition & Stacking

Sometimes one role isn't enough. Here's how to combine them.

### When to Stack Roles

- **Multi-dimensional decisions** — "Should we build this feature?" needs CTO (feasibility) + CFO (economics) + CRO (revenue impact)
- **Tension testing** — Deliberately load opposing perspectives to stress-test a plan
- **Cross-functional reviews** — Quarterly planning, annual strategy, reorgs

### Complementary Pairs

| Decision Type | Primary Role | Pair With | Why |
|--------------|-------------|-----------|-----|
| Build vs. buy | CTO | CFO | Technical feasibility meets unit economics |
| Hiring decisions | VP People | COO | Culture fit meets capacity planning |
| Pricing changes | CFO | CRO | Margin impact meets sales reality |
| Go-to-market | CMO | CRO | Brand strategy meets pipeline reality |
| Client escalation | COO | Consigliere | Process meets political judgment |
| Product strategy | CTO | AEO Expert | Platform vision meets market positioning |
| Founder overwhelm | Performance Coach | Chief of Staff | Inner clarity meets external prioritization |
| Hard conversations | Consigliere | VP People | Truth-telling meets people sensitivity |

### Conflict Resolution Between Roles

When stacked roles disagree (and they should):

1. **Name the tension** — "The CFO says no based on margins. The CRO says yes based on pipeline. Here's the tradeoff."
2. **Identify the constraint** — Which role's concern is the binding constraint? Cash is usually the binding constraint over growth.
3. **Time-horizon test** — Short-term vs. long-term. The CFO often wins short-term, the CTO wins long-term.
4. **Ask the CEO** — Present the tension clearly and let Marcel decide. Don't resolve it silently.

### Context Dependencies

Each role works better with specific docs loaded alongside it:

| Role | Always Load With | Load If Relevant |
|------|-----------------|-----------------|
| CFO | `docs/finance/fiscal-plan-2026-v2.md` | `docs/business/business-model.md` |
| COO | `docs/delivery/teams-and-operations.md` | `docs/delivery/8-week-plan-v1.md` |
| CTO | `docs/products/ecosystem-strategy.md` | `docs/products/checkthat/product-vision-v1.md` |
| CRO | `docs/business/ideal-customer-profile.md` | `docs/business/customer-lifecycle.md` |
| CMO | `docs/business/overview.md` | `context/voice/writing-style-context-v2.md` |
| Chief of Staff | `docs/company/vision-and-strategy.md` | `docs/company/strategy-overview.md` |
| VP People | `docs/company/culture-and-values.md` | `docs/people/` |
| AEO Expert | `knowledge/aeo/README.md` | `docs/products/checkthat/product-vision-v1.md` |
| Performance Coach | `context/personal/marcel-santilli-user-manual-v1.md` | `context/personal/marcel-santilli-psychological-profile-v1.md` |
| Consigliere | `context/personal/marcel-santilli-user-manual-v1.md` | `docs/company/vision-and-strategy.md` |

---

## The Bottom Line

**The Inner Circle** helps you perform at your best and tells you what you need to hear.

**The Executive Team** provides world-class functional expertise in every domain.

**Stacking roles** gives you the multi-perspective analysis that real leadership teams provide — without the politics.

Together, they're your virtual leadership team — available on demand, no politics, no filters.
