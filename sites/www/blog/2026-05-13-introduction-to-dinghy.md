---
title: 'Introduction to Dinghy: a Swiss-army knife for everyday engineering'
description: 'Meet Dinghy — an open-source toolchain that lets you author diagrams, infrastructure, documentation, and slides as code, with a single CLI.'
slug: introduction-to-dinghy
tags: [react, revealjs, terraform, opentofu]
image: /assets/img/blog/cover-introduction.svg
draft: true
devto_url: https://dev.to/mrduguo/introduction-to-dinghy-a-swiss-army-knife-for-everyday-engineering-20l2
devto_id: 3658549
---

![Introduction to Dinghy](/assets/img/blog/cover-introduction.svg)

If you ship anything for a living — diagrams, infrastructure, docs, slide decks
— you have probably noticed that each of those things lives in its own world,
with its own toolchain, its own opinionated editor, and its own subtle ways to
drift out of sync.

[**Dinghy**](https://dinghy.dev) is an open-source toolchain that puts all of
them under one roof. One CLI. One install. One consistent way to _describe_ what
you want **as code** and let the tools deliver the final artwork.

<!-- truncate -->

## What it is

A Swiss-army knife for engineers who like writing code more than clicking
through dialogs:

- **Diagram as Code** — render architecture diagrams to draw.io.
- **Infrastructure as Code** — render OpenTofu / Terraform from React TSX.
- **Site Builder** — author docs sites with Docusaurus, live-preview them,
  deploy to S3.
- **Slide Builder** — author RevealJS presentations in YAML / Markdown / HTML,
  with Prezi-style zoom-and-pan as a Dinghy-exclusive bonus.

It is powered by **Deno** and **Docker**, so you do not need to babysit Node
versions, Python virtualenvs, Terraform providers, or any of the rest of it.

## From a DevOps engineer's bench

Dinghy was built by a DevOps engineer, so it is shaped to walk with your code
across the whole software development lifecycle — from local development through
to CI/CD — instead of stopping at the edge of one stage.

## How it is shaped

Dinghy splits cleanly into a thin **CLI** and a fat **engine** that runs in
Docker. The CLI is what you install on your machine; the engine is a versioned
image that ships every dependency Dinghy needs.

```bash
curl -fsSL https://get.dinghy.dev/install.sh | sh
```

That single command gets you the CLI. From then on, everything Dinghy does
happens inside the engine image — which means **every machine on your team gets
the exact same versions** of Deno, Node, OpenTofu / Terraform, and every TF
provider, pinned through a single `.dinghyrc` file.

```
DINGHY_ENGINE_VERSION=0.1...
```

One lock. Predictable versions. No more "it works on my laptop" — and no more
two-year-old projects you can't rebuild because the dependencies have rotted
away.

## Who it's for

Anyone who needs to write code for any of this work — a diagram, a piece of
infrastructure, a docs site or web app, a slide deck. You do not need to use
them all, and you do not need to use them all the time. Reach for one when that
is all you need; pull in a few when the work spans more than one.

If any of that sounds useful for what you are building, the rest of this series
digs into each capability one post at a time _(coming soon — links will go live
as each post is published)_:

1. **Where React for IaC came from** — the origin of the Dinghy project and core
   concept.
2. **Diagram as Code with draw.io** — author architecture diagrams as TSX
   components.
3. **Infrastructure as Code** — 248 lines of Terraform from 8 lines of source.
4. **Site Builder** — from one Markdown file to a deployed site.
5. **Slide Builder** — RevealJS in YAML, with Prezi-style zoom.
6. **Dinghy in the AI age** — still relevant? How it works alongside AI.

## Ready to set sail?

```bash
curl -fsSL https://get.dinghy.dev/install.sh | sh
```

Guides and examples are at [https://dinghy.dev](https://dinghy.dev).
