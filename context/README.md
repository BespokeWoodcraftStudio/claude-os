
# Context

<metadata>
purpose: Root directory overview for all prescriptive context files
audience: AI agents, founders, operators
summary: Prescriptive files that configure agent behavior — voice, roles, and personal context
token_estimate: small
depends_on: none
related: docs/, knowledge/
domain: company
confidence: canonical
context_tier: 0
last_updated: 2026-02-18
</metadata>

---

Prescriptive files that configure agent behavior. Load these BEFORE doing work.

## Prescriptive vs. Descriptive: The Key Distinction

If a file tells the agent **WHAT IS**, it's reference. It belongs in a descriptive directory (`docs/`, `knowledge/`, `sources/`). Reference files contain facts, data, research — the state of the world.

If a file tells the agent **WHAT TO DO**, it's context. It belongs here. Context files contain instructions, style rules, personas, preferences — how the agent should behave.

**Why this matters:** An agent calibrated with the right voice and persona will use company facts better than one that loads facts without knowing how to apply them. Context loads FIRST (calibration), then reference docs load SECOND (information).

**Examples:**
- "Our ARR is $2M" is reference (what IS) -> `docs/`
- "Write like a smart friend explaining something over coffee" is context (what to DO) -> `context/`
- "The CFO asks 'what's the payback period?'" is context (how to THINK) -> `context/`
- "Q3 revenue grew 34%" is reference (what IS) -> `docs/`

## Directories

| Directory | Purpose | When to Load |
|-----------|---------|-------------|
| `voice/` | How we write and communicate — Bespoke Woodcraft Studio voice, social media style | Any content generation or writing task |
| `roles/` | How we think — AI executive and advisory personas | Decision support, analysis, reasoning tasks |
| `personal/` | Who the founder is — operating manual, preferences, patterns | Working directly with or for the founder |

## Loading Order

1. **Context loads FIRST** — calibrates the agent's voice, thinking patterns, and interaction style
2. **Reference docs load SECOND** — provides the facts, data, and company information the agent needs
3. **Task execution happens THIRD** — the agent now has both HOW to behave and WHAT to work with

## What Each Directory Contains

### voice/
The definitive writing rules for Bespoke Woodcraft Studio. The writing style guide is the single most important context file for any content generation task. Includes base voice definition, core principles, structure patterns, domain adaptations, and a social media style guide.

### roles/
Templates for AI personas that think like your executive team and inner circle. Two types: **executive roles** (CFO, CMO, COO — serve the function) and **advisory roles** (coach, consigliere — serve the founder). Roles can be stacked for multi-perspective analysis.

### personal/
The founder's operating manual. Communication preferences, decision-making philosophy, feedback style, stress patterns, values, and personal context. This is what makes AI interactions feel calibrated to the specific human they're working with.

## The Context Stack

For most tasks, you'll load context in layers:

| Layer | What It Does | Example |
|-------|-------------|---------|
| **Voice** | Sets writing tone and style | "Write in our direct, clear voice" |
| **Role** | Sets thinking patterns and expertise | "Think like our CFO" |
| **Personal** | Sets interaction preferences | "Frame this the way the founder processes it" |
| **Reference** | Provides facts and data | "Use our actual financials" |

Not every task needs every layer. A blog post might only need voice. A financial analysis might need voice + CFO role + reference docs. A coaching session might need personal + advisory role.
