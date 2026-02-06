---
name: update-notion-doc
description: Update Notion pages from local markdown files while preserving Notion-specific elements. Use when the user wants to sync a local markdown file to Notion, provides a Notion URL and asks to update it, or says "update notion" or "sync to notion". Triggers on "notion", "update notion", "sync to notion", "notion doc".
---

# Update Notion Doc

Update Notion pages from local markdown files while preserving Notion-specific elements.

## Workflow

### 1. Fetch the Existing Notion Page

Always fetch first to understand the current structure:

```
notion-fetch with id: <notion-url-or-page-id>
```

**Why:** Identify elements to preserve (Related Docs callouts, child pages, databases, etc.)

### 2. Read the Source Markdown File

Read the local `.md` file that contains the updated content.

### 3. Convert Markdown to Notion Format

**Tables:** Convert markdown tables to Notion XML format:

```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

Becomes:

```xml
<table header-row="true">
<tr>
<td>Column 1</td>
<td>Column 2</td>
</tr>
<tr>
<td>Data 1</td>
<td>Data 2</td>
</tr>
</table>
```

**Callouts:** Use for important notes:

```xml
<callout icon="/icons/info-alternate_gray.svg" color="green_bg">
Content here
</callout>
```

**Standard Markdown That Works:**
- `## Headers` (H2, H3, etc.)
- `**bold**` and `*italic*`
- `- bullet lists`
- `1. numbered lists`
- `- [ ] todo items`
- `---` horizontal rules
- `> blockquotes`
- `[links](url)`

**Line breaks in lists:** Use `<br>` for line breaks within list items.

### 4. Update the Page

Use `replace_content_range` to update while preserving elements:

```
notion-update-page with data: {
  "page_id": "<page-id>",
  "command": "replace_content_range",
  "selection_with_ellipsis": "<start-10-chars>...<end-10-chars>",
  "new_str": "<new-content>"
}
```

**Selection format:** First ~10 chars + `...` + last ~10 chars of the content to replace.

**Preserve elements:** Keep Related Docs callouts, child pages (`<page url="...">`), and databases (`<database url="...">`) in the new content.

### 5. Common Patterns

**Preserve header callout, replace body:**
```
selection_with_ellipsis: "<empty-block/>...final sentence."
```

**Full page replace (when no elements to preserve):**
```
{
  "command": "replace_content",
  "new_str": "<full-content>"
}
```

## Notion Formatting Reference

### Icons
- `/icons/info-alternate_gray.svg` - Info
- `/icons/first-aid-kit_gray.svg` - Health/Help
- `/icons/warning_gray.svg` - Warning
- `/icons/check-circle_gray.svg` - Success

### Callout Colors
- `gray_bg`, `green_bg`, `blue_bg`, `yellow_bg`, `red_bg`, `purple_bg`

### Special Elements
- Empty block: `<empty-block/>`
- Page link: `[Title]({{/page-id?pvs=25}})`
- Child page reference: `<page url="{{https://www.notion.so/page-id}}"/>`
- Child database reference: `<database url="{{https://www.notion.so/db-id}}"/>`

## Checklist

Before updating:
- Fetched existing page to see structure
- Identified elements to preserve (callouts, child pages, etc.)
- Converted markdown tables to Notion XML format
- Used proper selection_with_ellipsis for targeted replacement
- Verified no child pages/databases will be accidentally deleted

## Troubleshooting

**"Selection not found":** The selection_with_ellipsis doesn't match. Check for extra whitespace, special characters, or content that changed since fetch.

**"Would delete child content":** The update would remove child pages. Either include `<page url="...">` tags in new_str, or ask user for confirmation.

**Tables not rendering:** Ensure `header-row="true"` is set, each row has `<tr>` and each cell has `<td>`, and no extra whitespace in table structure.
