<!-- TEMPLATE: Replace all [BRACKETED] placeholders. Delete this comment when done. -->

# Customers

<metadata>
purpose: Client-specific documentation, context files, and engagement history
audience: AI agents and team members working on client accounts
summary: Per-client subdirectories containing context docs, transcripts, and engagement records.
token_estimate: small
related: records/transcripts/README.md, docs/context-routing.md
domain: records
confidence: canonical
context_tier: 2
last_updated: 2026-02-18
</metadata>

Client documentation, context files, and meeting transcripts organized by customer.

## Directory Structure

Each client gets its own subdirectory:

```
records/customers/
  [client-name]/
    [client-name]-client-context-v1.md    # Overview and key context
    transcripts/                           # Client-specific meeting transcripts
      YYYY-MM-DD-meeting-description.md
```

## How to Use

1. **Search by client name** to find relevant context
2. **Start with the client context file** for an overview of the engagement
3. **Search transcripts/ subdirectory** for specific meeting discussions
4. **Never bulk-load** a client directory -- read files individually

## Adding a New Client

1. Create a subdirectory: `records/customers/[client-name]/`
2. Create a client context file using the template below
3. Create a `transcripts/` subdirectory for meeting transcripts
4. Update INDEX.md with the new client entry
