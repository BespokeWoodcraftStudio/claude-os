# Context

Prescriptive files that configure agent behavior. Load these BEFORE doing work.

These files don't describe reality — they prescribe how to act. Voice tells the agent how to write. Roles tell it how to think. Personal tells it how to interact with Marcel.

**The test:** If a file tells the agent what IS, it belongs in a reference directory (docs/, knowledge/, sources/). If it tells the agent what to DO, it belongs here.

## Directories

| Directory | Purpose | When to Load |
|-----------|---------|-------------|
| `voice/` | How we write and communicate — GrowthX voice, Marcel's LinkedIn style | Any content generation or writing task |
| `roles/` | How we think — AI executive personas (CFO, COO, CTO, etc.) | Decision support, analysis, reasoning tasks |
| `personal/` | Who Marcel is — user manual, psychological profile | Working directly with/for Marcel |

## Loading Order

Context loads FIRST (calibration), then reference docs load SECOND (information). An agent calibrated with the right voice and persona will use company facts better than one that loads facts without knowing how to apply them.
