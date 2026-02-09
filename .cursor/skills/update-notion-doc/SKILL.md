# Update Notion Doc Skill

Update Notion pages from local markdown files while preserving Notion-specific elements.

## Inputs / Outputs

| | What | Example |
|---|---|---|
| **Input** | Local markdown file + Notion page URL | `@docs/company/vision.md` + Notion URL |
| **Tool** | Notion MCP server (`user-Notion/notion-fetch`, `notion-update-page`) | -- |
| **Output** | Updated Notion page with confirmation | "Updated page, preserved 2 child pages" |

## When to Use

Use this skill when:
- User wants to sync a local markdown file to Notion
- User provides a Notion URL and asks to update it
- User says "update notion" or "sync to notion"

## Workflow

### 1. Fetch the Existing Notion Page

Always fetch first to understand the current structure:

```
CallMcpTool: user-Notion / notion-fetch
Arguments: {"id": "<notion-url-or-page-id>"}
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

**Line breaks in lists:** Use `<br>` for line breaks within list items:

```
1. **First item**<br>Description here
```

### 4. Update the Page

Use `replace_content_range` to update while preserving elements:

```
CallMcpTool: user-Notion / notion-update-page
Arguments: {
  "data": {
    "page_id": "<page-id>",
    "command": "replace_content_range",
    "selection_with_ellipsis": "<start-10-chars>...<end-10-chars>",
    "new_str": "<new-content>"
  }
}
```

**Selection format:** First ~10 chars + `...` + last ~10 chars of the content to replace.

**Preserve elements:** Keep Related Docs callouts, child pages (`<page url="...">`), and databases (`<database url="...">`) in the new content.

### 5. Common Patterns

**Preserve header callout, replace body:**

```
selection_with_ellipsis: "<empty-block/>...final sentence."
```

This keeps everything before the empty-block (like Related Docs) and replaces everything after.

**Full page replace (when no elements to preserve):**

```
{
  "command": "replace_content",
  "new_str": "<full-content>"
}
```

## Notion Formatting Reference

### Icons

Common icon paths:
- `/icons/info-alternate_gray.svg` - Info
- `/icons/first-aid-kit_gray.svg` - Health/Help
- `/icons/warning_gray.svg` - Warning
- `/icons/check-circle_gray.svg` - Success

### Callout Colors

- `gray_bg`, `green_bg`, `blue_bg`, `yellow_bg`, `red_bg`, `purple_bg`

### Special Elements

**Empty block:** `<empty-block/>`

**Page link:** `[Title]({{/page-id?pvs=25}})`

**Child page reference:** `<page url="{{https://www.notion.so/page-id}}"/>`

**Child database reference:** `<database url="{{https://www.notion.so/db-id}}"/>`

## Checklist

Before updating:
- [ ] Fetched existing page to see structure
- [ ] Identified elements to preserve (callouts, child pages, etc.)
- [ ] Converted markdown tables to Notion XML format
- [ ] Used proper selection_with_ellipsis for targeted replacement
- [ ] Verified no child pages/databases will be accidentally deleted

## Example

**User request:** "Update the Notion doc at [URL] with content from @docs/my-file.md"

**Steps:**
1. `notion-fetch` the URL
2. `Read` the local file
3. Convert tables to XML format
4. Use `replace_content_range` preserving Related Docs callout
5. Summarize what changed

## Troubleshooting

**"Selection not found":** The selection_with_ellipsis doesn't match. Check for:
- Extra whitespace
- Special characters
- Content that changed since fetch

**"Would delete child content":** The update would remove child pages. Either:
- Include `<page url="...">` tags in new_str
- Ask user for confirmation and set `allow_deleting_content: true`

**Tables not rendering:** Ensure:
- `header-row="true"` is set
- Each row has `<tr>` and each cell has `<td>`
- No extra whitespace in table structure
