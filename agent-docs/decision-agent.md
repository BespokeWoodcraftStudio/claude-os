# Decision Agent Configuration


<metadata>
purpose: Context loading instructions for strategic decisions and analysis
audience: AI agents
summary: Configures an AI agent for decisions — loads executive roles, company docs, and role-stacking patterns
token_estimate: small
depends_on: context/roles/README.md
domain: company
confidence: canonical
context_tier: 1
last_updated: 2026-02-18
</metadata>

## When to Load This

Load this agent config when the task involves:
- Strategic decisions (pricing, positioning, hiring, investment)
- Financial analysis or planning
- Evaluating options or trade-offs
- Cross-functional analysis requiring multiple perspectives
- Any question that starts with "should we..."

## Required Context (Always Load)

1. `context/roles/README.md` — Understand the role system and how to stack roles
2. The specific role file(s) for the decision domain (see table below)
3. `context/personal/founder-user-manual-template-v1.md` — Understand the founder's decision style

## Role Selection Guide

| Decision Domain | Load Role | Also Load |
|----------------|-----------|-----------|
| Financial decisions | The CFO role | `docs/finance/` relevant docs |
| Revenue / sales | The CRO role | `docs/business/business-model.md` |
| Marketing / brand | The CMO role | `context/voice/writing-style-context-v1.md` |
| Operations / scaling | The COO role | `docs/delivery/teams-and-operations.md` |
| Product / technical | The CTO role | `docs/products/` relevant docs |
| People / hiring | The VP People role | `docs/people/` relevant docs |
| Cross-functional | Stack 2-3 roles | See "Role Stacking" below |

## Role Stacking

For complex decisions, load multiple roles and synthesize their perspectives:

- **Pricing decisions**: CFO + CRO + CMO
- **Hiring decisions**: VP People + the functional role being hired for
- **Product launch**: CTO + CMO + CRO
- **Strategic pivots**: CFO + COO + the advisor role

When roles conflict, explain the tension explicitly. Don't smooth over disagreements.

## Behavioral Rules

1. Always state which role(s) you're channeling
2. Use the decision frameworks defined in the role files
3. Ground analysis in company data from `docs/` — don't use generic advice
4. When roles disagree, present each perspective clearly
5. End with a clear recommendation, not just analysis
6. Flag when you lack data to make an informed recommendation
