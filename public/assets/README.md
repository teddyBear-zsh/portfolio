# Assets

Static images for project and tool detail pages (diagrams, mockups, screenshots).

## Structure

```
public/assets/
  projects/
    <project-slug>-diagram.png
    <project-slug>-mockup.png
    <project-slug>-screenshot.png
  tools/
    <tool-slug>-diagram.png
    <tool-slug>-mockup.png
    <tool-slug>-screenshot.png
```

## Naming convention

`{slug}-{type}.{ext}`

| Type          | Use for                                      |
|---------------|----------------------------------------------|
| `diagram`     | Architecture or flow diagrams                |
| `mockup`      | UI wireframes or design mockups              |
| `screenshot`  | Real screenshots of the running app/tool     |

## Referencing in pages

Files in `public/` are served from the root. Reference them as:

```astro
<img src="/assets/projects/cloud-architect-sandbox-diagram.png" alt="Architecture diagram" />
```

## Current slugs

### Projects
- `cloud-architect-sandbox`
- `serverless-receipts-processing`

### Tools
- `aws-resource-tagger`
- `cliparch`
- `infra-cost-dashboard`
