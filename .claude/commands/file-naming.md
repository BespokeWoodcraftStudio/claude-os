Apply file naming and versioning conventions to any file being created or renamed in this workspace.

## Rules

Format: `descriptive-name-v1.md` (lowercase, hyphens, version suffix)

- **Lowercase** — no capitals
- **Hyphens between words** — no underscores or spaces
- **Version suffix** — `-v1`, `-v2` for all context files
- **Descriptive names** — explain what the file contains

## Examples

Good: `company-vision-and-strategy-v1.md`, `ideal-customer-profile-v1.md`
Bad: `Company Vision.md`, `icp_v1.md`, `strategy.md`

## Versioning

- **Minor updates:** Edit in place, update `last_updated` in metadata
- **Major changes:** Create new version (`-v2`), move old to `/archive`

Each directory has an `/archive` subdirectory for outdated files.
