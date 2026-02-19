# Role Test

Verify that executive roles load correctly and produce role-specific analysis.

---

## Prerequisites

Before running this test, you must have:
- Created at least one role file in `context/roles/` (e.g., a CFO role)
- Filled in the role's decision frameworks, key questions, and mental models

---

## Test 1: Single Role Analysis

### Prompt

> As [YOUR ROLE, e.g., CFO], should we hire two more people this quarter?

### What Should Load

- `context/roles/[your-role]-v1.md`
- `context/personal/founder-user-manual-template-v1.md` (if filled in)
- Relevant docs from the role's `depends_on` field

### What Good Looks Like

- [ ] **States which role it's channeling** — "As your CFO..."
- [ ] **Uses the role's decision frameworks** — references specific frameworks from the role file
- [ ] **Asks the role's key questions** — uses the questions defined in the role template
- [ ] **Grounds in company data** — references docs/ content, not generic advice
- [ ] **Gives a clear recommendation** — not just analysis, but a decision
- [ ] **Flags missing data** — if it lacks information to decide, it says so

### What Bad Looks Like

> Hiring decisions are complex and require careful consideration of various factors including budget, workload, and strategic priorities. You should evaluate your current team capacity...

(Generic, no role personality, no frameworks, no recommendation)

---

## Test 2: Role Stacking

### Prompt

> We're considering raising our prices by 20%. Analyze this from both a financial and revenue perspective.

### What Should Load

- Two role files (e.g., CFO + CRO)
- `context/roles/README.md` (for stacking instructions)

### What Good Looks Like

- [ ] **Explicitly names both roles** — "From a CFO perspective..." then "From a CRO perspective..."
- [ ] **Shows tension** — where the roles disagree, it explains the conflict
- [ ] **Uses different frameworks** — each role applies its own decision tools
- [ ] **Synthesizes at the end** — provides a unified recommendation despite different perspectives
- [ ] **Doesn't smooth over disagreements** — preserves the productive tension

---

## Test 3: Role + Company Context

### Prompt

> As [YOUR ROLE], review our current strategy and identify the top 3 risks.

### What Should Load

- Role file
- `docs/company/strategy-overview.md`
- Other relevant docs/ files

### What Good Looks Like

- [ ] **References actual strategy** — pulls from your filled-in strategy doc
- [ ] **Role-specific risks** — a CFO sees financial risks, a CTO sees technical risks
- [ ] **Prioritized** — ranks risks by severity, not just lists them
- [ ] **Actionable** — each risk comes with a mitigation suggestion
