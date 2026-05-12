---
title: "Site Builder: from one Markdown file to a deployed site in three commands"
description: "Dinghy wraps Docusaurus into a zero-config site builder. One folder, one MDX file, one command — and you have live preview at localhost:3000. Deploy to S3 with smart defaults baked in."
slug: site-builder
tags: [dinghy, docusaurus, documentation, mdx, s3]
image: /assets/img/blog/cover-site-builder.svg
draft: true
---

![Site Builder: from Markdown to deployed site in 3 commands](/assets/img/blog/cover-site-builder.svg)

If you have ever tried to spin up a Docusaurus site, you know the drill: scaffold the project, install dependencies, write a config, hunt down a theme, get the navbar right, and *then* you can start writing the actual docs.

Dinghy collapses that whole opening act into a single command.

<!-- truncate -->

## Minimal setup

```bash
mkdir -p src/pages
echo "# Welcome" > src/pages/INDEX.mdx
dinghy site start
```

That is the entire setup. One folder, one file, one command — and you have live preview running at http://localhost:3000 with hot reload.

No `package.json`, no `node_modules`, no Docusaurus config. The Dinghy engine ships a fully-configured Docusaurus inside its Docker image and points it at your `src/` folder.

## What you get

The defaults are tuned to be useful out of the box:

- **`src/pages/`** — standalone MDX pages (homepage lives at `INDEX.mdx`).
- **`src/docs/`** — auto-detected docs section with sidebar navigation generated from the directory tree.
- **`src/blog/`** — auto-detected blog section with date-prefixed posts.
- **`src/css/custom.css`** — auto-loaded custom theme overrides.
- **`static/`** — assets, served as-is.

If a folder is there, it works. If it is not, Dinghy does not try to be clever about it.

## Customizing

When the defaults are not enough, drop a `docusaurus.config.yml` in the site root. Dinghy intercepts a handful of top-level keys (`docs`, `blog`, `theme`, `navbar`, `footer`, `sidebars`) and merges the rest straight into the underlying Docusaurus config:

```yaml
title: My Project
navbar:
  title: My Project
  items:
    - label: Guides
      to: /guides/getting-started
      position: left
```

Set `logo: false` to drop the default logo. Set `footer: false` to drop the footer entirely. Anything Docusaurus supports, you can reach.

## Deploying to S3

S3 is a first-class deploy target. Add it to your config:

```yaml
deploy:
  s3Url: s3://my-bucket/path
  s3Region: us-east-1
```

Then:

```bash
dinghy site deploy
```

The deploy command is not a thin wrapper. It does the things you would otherwise do by hand:

- **Removes `.html` extensions** so URLs look clean.
- **Gzip-compresses** text files (HTML, JS, CSS, SVG, XML, TXT, JSON) before upload.
- **Sets cache-control headers** that match the file type — `immutable` for hashed assets, short TTL for mutable files.

If you have ever shipped a static site and discovered three months later that your HTML was being served with a one-year cache header, this is the kind of detail that pays for itself.

## The pattern

Dinghy's builders work the same way every time: opinionated defaults that match the 80% case, escape hatches for the rest, and a single CLI verb (`start`, `build`, `deploy`) for the lifecycle.

The doc site you are reading right now (assuming you are reading on dinghy.dev) is built with this exact pipeline.

---

Next up: [Slide Builder](#) — what happens when you point this same philosophy at presentations.
