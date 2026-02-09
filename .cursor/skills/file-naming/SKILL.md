---
name: file-naming
description: File naming and versioning conventions for this repository. Apply when creating, renaming, or organizing files in the workspace. This skill should always be considered when working with files to ensure consistent naming.
---

# File Naming & Versioning

Apply these conventions when creating or renaming files in this workspace.

## Inputs / Outputs

| | What | Example |
|---|---|---|
| **Input** | File being created or renamed | Any new `.md` file in this workspace |
| **Output** | Correctly named file following conventions | `company-vision-and-strategy-v1.md` |

This skill is passive -- apply it whenever creating or renaming files. No tools required.

## Naming Convention

Format: `descriptive-name-v1.md`

- **Lowercase** - no capitals
- **Hyphens between words** - no underscores or spaces
- **Version suffix** - `-v1`, `-v2` for all context files
- **Descriptive names** - explain what the file contains

## Examples

**Good:**
- `company-vision-and-strategy-v1.md`
- `ideal-customer-profile-v1.md`
- `writing-style-context-v2.md`

**Bad:**
- `Company Vision.md` (spaces, capitals, no version)
- `icp_v1.md` (underscores, abbreviation)
- `strategy.md` (no version, not descriptive)

## Version Management

| Change Type | Action |
|-------------|--------|
| Minor updates | Edit in place, update `last_updated` in metadata |
| Major changes | Create new version (`-v2`), move old to `/archive` |

## Archive Structure

Each directory has an `/archive` subdirectory for outdated files.

```
context/voice/
├── writing-style-context-v2.md  # Current
└── archive/
    └── writing-style-context-v1.md  # Previous
```
