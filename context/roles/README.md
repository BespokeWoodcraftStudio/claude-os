
# AI Executive Roles

<metadata>
purpose: Index of AI persona role templates for decision support and task execution
audience: Founders, operators, anyone building an AI-powered leadership team
summary: Templates and guidance for creating AI personas that think like your executive team and inner circle
token_estimate: medium
depends_on: none
related: context/personal/, context/voice/
domain: company
confidence: canonical
context_tier: 0
last_updated: 2026-02-18
</metadata>

---

## What This Is

This directory contains templates for building AI persona roles — virtual executives and advisors that think, reason, and communicate like real leaders. Reference a role file (e.g., `@context/roles/cfo-v1.md`) to have your AI agent think and act as that executive.

Each role provides:
- **Leaders to channel** — Real operators whose thinking patterns to emulate
- **Decision frameworks** — Proven frameworks for the role's key decisions
- **Mental models** — How great leaders in this role think about problems
- **Essential reading** — Books, podcasts, and articles to deepen understanding
- **Voice and approach** — How the persona communicates
- **Context to reference** — Which company docs inform decisions (via `depends_on` metadata)

---

## Two Types of Roles

### The Inner Circle (Personal Support)

These roles serve YOU directly as founder/CEO. They focus on your performance, your decisions, and your psychological state.

Use the **[advisor-role-template-v1.md](advisor-role-template-v1.md)** to create these.

**Suggested roles to create:**

| Role | Core Focus | When to Use |
|------|-----------|-------------|
| **Performance Coach** | Peak performance, psychological insight, founder mental health | "I'm stuck and I don't know why" |
| **Consigliere** | Fierce loyalty, uncomfortable truths, ruthless execution | "What's the uncomfortable truth I need to hear?" |
| **Strategic Advisor** | Long-term thinking, board-level perspective, pattern matching | "Am I thinking about this the right way?" |
| **Thinking Partner** | Assumption testing, devil's advocate, intellectual sparring | "Challenge my reasoning on this" |

### The Executive Team (Functional Expertise)

These roles provide world-class expertise in specific business functions. They serve the FUNCTION, not the founder personally.

Use the **[executive-role-template-v1.md](executive-role-template-v1.md)** to create these.

**Suggested roles to create:**

| Role | Core Focus | When to Use |
|------|-----------|-------------|
| **CFO** | Unit economics, cash flow, pricing, capital allocation | Financial decisions, investment analysis |
| **COO** | Operations, capacity planning, delivery efficiency | Process design, scaling decisions |
| **CTO** | Technical architecture, build-vs-buy, engineering strategy | Product and technical decisions |
| **CMO** | Brand, demand generation, marketing strategy | Marketing and positioning decisions |
| **CRO** | Sales, pipeline, revenue growth, deal strategy | Revenue and go-to-market decisions |
| **Chief of Staff** | Strategic priorities, cross-functional alignment | Prioritization, planning cycles |
| **VP People** | Hiring, org design, culture, performance management | People and organization decisions |

---

## How to Use Roles

**For personal support:**
```
@context/roles/[your-coach-role].md - I'm in my head about a decision and can't move forward. Help me see what's going on.
```

**For functional expertise:**
```
@context/roles/[your-cfo-role].md - Review the unit economics of this initiative.
```

**For multiple perspectives (role stacking):**
```
@context/roles/[your-coo-role].md @context/roles/[your-cfo-role].md - We're considering hiring 3 more people. Walk me through the ops and financial implications.
```

**To channel a specific leader:**
```
@context/roles/[your-cro-role].md - Think through this deal the way [Leader Name] would.
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

## Role Composition and Stacking

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
| Founder overwhelm | Performance Coach | Chief of Staff | Inner clarity meets external prioritization |
| Hard conversations | Consigliere | VP People | Truth-telling meets people sensitivity |

### Conflict Resolution Between Roles

When stacked roles disagree (and they should):

1. **Name the tension** — "The CFO says no based on margins. The CRO says yes based on pipeline. Here's the tradeoff."
2. **Identify the constraint** — Which role's concern is the binding constraint?
3. **Time-horizon test** — Short-term vs. long-term. The CFO often wins short-term, the CTO wins long-term.
4. **Ask the CEO** — Present the tension clearly and let the founder decide. Don't resolve it silently.

---

## The `depends_on` Metadata Field

Each role works better when specific docs are loaded alongside it. The `depends_on` field in a role's metadata lists required co-loading docs.

**How it works:**
- `depends_on` = docs that MUST be loaded with this role for it to function
- `related` = docs that are USEFUL but not required

**Example:**
```xml
<metadata>
depends_on: docs/finance/fiscal-plan.md, docs/business/business-model.md
related: context/roles/cro-v1.md
</metadata>
```

When an agent sees `depends_on`, it should load those files before activating the role. This ensures the persona has the company context it needs to give relevant advice.

---

## Getting Started

1. **Start with 2-3 roles** — Don't build all 10 at once. Start with the roles you'd use most.
2. **Fill in the templates completely** — Half-filled templates produce half-quality personas. The Leaders to Channel and Decision Frameworks sections matter most.
3. **Test with real decisions** — After creating a role, test it with a decision you already made. Does it give you the analysis you'd want?
4. **Iterate** — Roles improve with use. When a role misses something, add it to the file.

---

## The Bottom Line

**The Inner Circle** helps you perform at your best and tells you what you need to hear.

**The Executive Team** provides world-class functional expertise in every domain.

**Stacking roles** gives you the multi-perspective analysis that real leadership teams provide — without the politics.

Together, they're your virtual leadership team — available on demand, no politics, no filters.

---

See [INDEX.md](INDEX.md) for a complete file listing.
