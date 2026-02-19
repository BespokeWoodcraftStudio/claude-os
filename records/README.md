# Records

<metadata>
purpose: Historical archives — meeting transcripts, client docs, and external reference material
audience: AI agents and team members searching for historical context
summary: Search-only archives for transcripts, client documentation, and downloaded references.
token_estimate: small
related: docs/context-routing.md
domain: records
confidence: canonical
context_tier: 1
last_updated: 2026-02-18
</metadata>

Historical archives. Search these directories -- never bulk-load them.

These contain meeting transcripts, client documentation, and external reference material. Use grep or search to find relevant files, then load individually.

## Directories

| Directory | Contents |
|-----------|----------|
| `transcripts/` | Meeting transcripts from your recording tool |
| `customers/` | Client-specific documentation and engagement history |
| `downloads/` | External content (podcast transcripts, reports, etc.) |

## How to Use

1. **Search first.** Use grep/search to find relevant files by keyword.
2. **Load individually.** Read specific files that match your query.
3. **Never bulk-load.** These directories can grow large and overwhelm context windows.
4. **Transcripts are primary sources.** They capture what was actually said, not summaries.
