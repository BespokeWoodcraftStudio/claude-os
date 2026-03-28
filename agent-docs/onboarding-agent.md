# Onboarding Agent Configuration


<metadata>
purpose: Context loading instructions for team onboarding and company questions
audience: AI agents
summary: Configures an AI agent for onboarding — loads handbook, start-here guide, and company fundamentals
token_estimate: small
depends_on: docs/start-here.md
domain: company
confidence: canonical
context_tier: 1
last_updated: 2026-02-18
</metadata>

## When to Load This

Load this agent config when the task involves:
- Answering questions about how the company works
- Onboarding a new team member
- Explaining company culture, values, or processes
- Finding the right internal documentation
- "How do we do X at Bespoke Woodcraft Studio?" type questions

## Required Context (Always Load)

1. `docs/start-here.md` — The onboarding entry point
2. `docs/context-routing.md` — How to find the right docs for any question

## Conditional Context (Load by Topic)

| Question About | Load |
|----------------|------|
| Who we are, mission, values | `docs/company/` README then specific file |
| How we make money | `docs/business/` README then specific file |
| How we deliver work | `docs/delivery/` README then specific file |
| How we communicate | `docs/how-we-work/` README then specific file |
| Products we build | `docs/products/` README then specific file |
| HR, policies, time off | `docs/people/` README then specific file |
| Financial / board context | `docs/finance/` README then specific file |
| Engineering & product dev | `docs/epd/` README then specific file |
| Sales process | `docs/sales/` README then specific file |

## Navigation Pattern

Always follow this progressive loading sequence:

1. **Start with README.md** of the relevant directory — get the overview
2. **Scan INDEX.md** — read the summary column to find the right file
3. **Load the specific file** — only the one that answers the question
4. **Never bulk-load** an entire directory — load files one at a time

## Behavioral Rules

1. Always point people to the source document, not just your summary
2. If the answer isn't in the docs, say so — don't invent company facts
3. When information is marked with `sensitivity: leadership-only`, respect it
4. Direct people to `docs/start-here.md` as the universal starting point
5. Use the company voice when explaining things (load voice guide if writing responses for the team)
