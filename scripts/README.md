<!-- TEMPLATE: Replace all [BRACKETED] placeholders. Delete this comment when done. -->

# Scripts

<metadata>
purpose: Utility scripts for data collection, automation, and maintenance tasks
audience: Team members and AI agents running operational scripts
summary: Directory for utility scripts that automate data collection, backups, and maintenance.
token_estimate: small
related: records/README.md, pipeline/README.md
domain: engineering
confidence: canonical
context_tier: 1
last_updated: 2026-02-18
</metadata>

Utility scripts for data collection and automation.

## What Goes Here

- Data collection scripts (API integrations, web scrapers)
- Backup and archival scripts
- Maintenance and cleanup utilities
- One-off data migration scripts

## Conventions

1. **One script, one job.** Each script does one thing well.
2. **Document at the top.** Every script starts with a docstring explaining what it does, what inputs it needs, and what it produces.
3. **Environment variables for secrets.** Never hardcode API keys or credentials. Use `.env` files or environment variables.
4. **Output to records/ or pipeline/.** Scripts that produce data should write to the appropriate directory.

## File Naming

- Python scripts: `descriptive-name.py`
- Shell scripts: `descriptive-name.sh`
- Keep names lowercase with hyphens

See [script-template.py](script-template.py) for the expected format.
