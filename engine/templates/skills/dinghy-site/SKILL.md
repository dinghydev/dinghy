---
name: dinghy-site
description: Create a new Dinghy Site (Docusaurus). Use when the user wants to create a documentation site, web app, or landing page using Dinghy's "Documentation as Code" feature.
argument-hint: [description]
---

Create a new Dinghy documentation site. A wrapper around
[Docusaurus](https://docusaurus.io/) — no project scaffolding, no dependency
management, no config boilerplate. Your contant is all your need.

## Site Directory

Before generating files, determine the **site directory**:

- If the current directory contains no pre-existing normal folders (e.g. it is
  empty or only has hidden files/config files), use the **current directory** as
  the site directory — place all generated files directly here.
- If the current directory already contains other folders (source code, configs,
  etc.), create a **`site/`** subfolder and place all generated files inside it.

All paths in the workflow and layout sections below are relative to the chosen
site directory.

## Workflow

1. **Create the homepage** at `src/pages/INDEX.mdx` or `src/docs/INDEX.mdx`.
   Either can serve as the homepage. Files named `INDEX.mdx`, `INDEX.md`,
   `README.mdx`, or `README.md` all render as `index.html` in their directory.

2. **Add documentation pages** when the user wants a docs section with sidebar
   navigation. Use MDX format. For a new site, place docs under `src/docs/`.
   When adding docs to an existing site that has no docs yet, use top-level
   `docs/` instead (renders with `/docs/` URL prefix).

3. **Add a blog** when the user wants a blog section. For a new site, place
   posts under `src/blog/`. When adding a blog to an existing site that has no
   blog yet, use top-level `blog/` instead (renders with `/blog/` URL prefix).

4. **Create `docusaurus.config.yml`** only when the user explicitly requests
   customization (title, navbar, footer, theme, search, etc.). The defaults work
   well out of the box — adding config without being asked is a common mistake.
   If in doubt, leave it out.

5. **After generating the site**, ask the user if they want to start the dev
   server now (`dinghy site start`). If they confirm, run it. Either way, also
   print the follow-up actions:
   ```
   Next steps:
   - `dinghy site start`  — start dev server with live reload (http://localhost:3000)
   - `dinghy site build`  — build for production
   - `dinghy site deploy` — deploy to AWS S3 (requires deploy.s3Url in config)
   - `dinghy devcontainer` — open in VSCode Devcontainer for development
   ```

6. **Restart the dev server** after making configuration changes (e.g. editing
   `docusaurus.config.yml`, adding new top-level folders like `docs/` or
   `blog/`). Content changes in existing files are picked up by live reload, but
   config and structural changes require a restart (`dinghy site start`).

## Project Layout

```
docusaurus.config.yml     <- optional site configuration
src/
  pages/
    INDEX.mdx             <- required: homepage
    about.mdx             <- optional extra pages
  docs/                   <- optional: documentation with sidebar
    guides/
      getting-started.mdx
    references/
      api.mdx
  blog/                   <- optional: blog posts
    2026-01-15-hello.md
  css/
    custom.css            <- optional: custom styling
  components/             <- optional: React/TSX components
static/
  assets/
    img/                  <- static images
```

`src/docs` and `src/blog` render at the site root without a URL prefix (same as
`src/pages`). If you use `docs/` or `blog/` in the site root instead, they
render with `/docs/` or `/blog/` URL prefixes.

## Homepage

A simple homepage example:

```mdx title="src/pages/INDEX.mdx"
# Welcome

To my site homepage
```

For a richer homepage, use MDX with React components:

```mdx title="src/pages/INDEX.mdx"
---
title: My Project
---

import Link from '@docusaurus/Link'

# My Project

A short description of the project.

<Link to="/docs/getting-started">Get Started</Link>
```

## Documentation Pages

Place docs under `src/docs/`. Docusaurus auto-generates sidebar navigation from
the directory structure.

```mdx title="src/docs/guides/getting-started.mdx"
---
sidebar_position: 10
---

# Getting Started

Introduction to the project.
```

### Frontmatter

| Key                | Type   | Description                                |
| ------------------ | ------ | ------------------------------------------ |
| `sidebar_position` | number | Controls ordering in the sidebar           |
| `sidebar_label`    | string | Override the sidebar display text          |
| `title`            | string | Page title (defaults to first `#` heading) |
| `edit_url`         | string | Custom edit URL (`none` to hide edit link) |
| `description`      | string | Meta description for SEO                   |

### Sidebar categories

Directories become sidebar categories. Add a `_category_.yml` to configure:

```yaml title="src/docs/guides/_category_.yml"
label: Guides
position: 10
```

## Blog

Place blog posts under `src/blog/`. Name files with date prefix for ordering.

```md title="src/blog/2026-01-15-hello.md"
---
title: Hello World
authors: [team]
tags: [announcement]
---

Our first blog post.

<!-- truncate -->

More content below the fold.
```

## Configuration

### docusaurus.config.yml

Use `docusaurus.config.yml` in the site root to provide
[Docusaurus configuration](https://docusaurus.io/docs/api/docusaurus-config) in
YAML format. Only create this when customization is needed.

```yaml title="docusaurus.config.yml"
title: My Project
tagline: A short tagline
url: https://my-project.example.com
favicon: assets/img/favicon.ico

navbar:
  title: My Project
  logo: false
  items:
    - label: Guides
      to: /guides/getting-started
      position: left
    - label: GitHub
      href: https://github.com/org/repo
      position: right

footer:
  style: dark
  copyright: 'Copyright © YYYY My Project. Built with Docusaurus.'

docs:
  sidebarCollapsed: false

sidebars:
  defaultSidebar:
    - type: autogenerated
      dirName: .
```

Top-level keys intercepted and mapped by the config resolver:

| Key           | Behavior                                                |
| ------------- | ------------------------------------------------------- |
| `docs`        | Mapped to `presets.classic.docs`. Auto-enabled when     |
|               | `src/docs/` exists (with `routeBasePath: /`)            |
| `blog`        | Mapped to `presets.classic.blog`. Auto-enabled when     |
|               | `src/blog/` exists (with `routeBasePath: /`)            |
| `theme`       | Mapped to `presets.classic.theme`. Auto-detects         |
|               | `src/css/custom.css`                                    |
| `svgr`        | Mapped to `presets.classic.svgr`. Enabled by default    |
| `classic`     | Spread into the classic preset options                  |
| `themeConfig` | Merged with default themeConfig (navbar, footer,        |
|               | colorMode, prism)                                       |
| `navbar`      | Merged into `themeConfig.navbar`. Set `logo: false` to  |
|               | remove the default logo                                 |
| `footer`      | Merged into `themeConfig.footer`. Set to `false` to     |
|               | remove footer entirely. `YYYY` in copyright is replaced |
|               | with the current year                                   |
| `sidebars`    | Written to `sidebars.ts` and linked to docs config      |

All other keys pass through to the top-level Docusaurus config.

### Config source priority

The `DINGHY_SITE_CONFIG_JSON` object is merged from these sources (later
overrides earlier):

1. `site` from `dinghy.config.yml`
2. `<site-dir>/../docusaurus.config.yml`
3. `<site-dir>/docusaurus.config.yml`
4. `<site-dir>/site/docusaurus.config.yml`
5. `<site-dir>/config/site/docusaurus.config.yml`

## Custom CSS

```css title="src/css/custom.css"
:root {
  --ifm-color-primary: #2e8555;
}

[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
}
```

Custom CSS is auto-detected from `src/css/custom.css`.

## Deploy to AWS S3

Configure S3 deployment in `docusaurus.config.yml`:

```yaml title="docusaurus.config.yml"
deploy:
  s3Url: s3://my-bucket/path
  s3Region: us-east-1
```

Then run:

```sh
dinghy site deploy
```

The deploy command automatically:

- Removes `.html` extensions for clean URLs (when `trailingSlash: false`)
- Uploads root `index.html` as `/`
- Gzip-compresses text files (html, js, css, svg, xml, txt, json)
- Sets optimal `cache-control` headers (immutable for hashed assets, short TTL
  for mutable files)

### Deploy options

| Key                             | Type     | Default                               | Description                              |
| ------------------------------- | -------- | ------------------------------------- | ---------------------------------------- |
| `deploy.s3Url`                  | string   | —                                     | S3 target URL (triggers S3 deploy)       |
| `deploy.s3Region`               | string   | `us-east-1`                           | AWS region                               |
| `deploy.gzipExtensions`         | string[] | `[js, css, svg, xml, txt, json]`      | File extensions to gzip before upload    |
| `deploy.cacheControl.mutable`   | string   | `public,max-age=3600,must-revalidate` | Cache-Control for mutable files          |
| `deploy.cacheControl.immutable` | string   | `public,max-age=2592000`              | Cache-Control for hashed/immutable files |
| `deploy.cleanUpStagingFiles`    | boolean  | `true`                                | Remove staging files after deploy        |

## Pre-installed Packages

Dependencies are based on
[create-docusaurus](https://docusaurus.io/docs/installation#scaffold-project-website).
Additional packages available:

| Package                                                | Usage                          |
| ------------------------------------------------------ | ------------------------------ |
| [raw-loader](https://www.npmjs.com/package/raw-loader) | Import source files as strings |

## Site Commands

| Command                | Description                                   |
| ---------------------- | --------------------------------------------- |
| `dinghy site start`    | Dev server with live reload at localhost:3000 |
| `dinghy site build`    | Build for production                          |
| `dinghy site serve`    | Serve the built site locally                  |
| `dinghy site deploy`   | Deploy to remote (S3 or standard)             |
| `dinghy site bash`     | Open bash in the Docusaurus container         |
| `dinghy site -- <cmd>` | Run any Docusaurus CLI command                |

## Examples

### Minimal site (single page)

```
src/pages/INDEX.mdx
```

```mdx title="src/pages/INDEX.mdx"
# My Project

Welcome to the documentation.
```

### Documentation site with sidebar

```
docusaurus.config.yml
src/
    pages/INDEX.mdx
    docs/
      guides/
        _category_.json
        getting-started.mdx
        configuration.mdx
      references/
        _category_.json
        api.mdx
        cli.mdx
    css/custom.css
  static/assets/img/logo.svg
```

```yaml title="docusaurus.config.yml"
title: Team Handbook
navbar:
  title: Team Handbook
  items:
    - label: Guides
      to: /guides/getting-started
      position: left
    - label: References
      to: /references/api
      position: left
```

### Site with blog

```
src/
    pages/INDEX.mdx
    blog/
      2026-01-15-welcome.md
      2026-02-01-update.md
```
