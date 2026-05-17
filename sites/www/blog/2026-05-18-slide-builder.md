---
title: "Slide Builder: RevealJS in YAML, with Prezi-style zoom"
description: "Author RevealJS presentations in YAML, Markdown, or HTML. Get a single self-contained HTML file out the other side. And — exclusive to Dinghy — Prezi-style zoom-and-pan built into the slide format."
slug: slide-builder
tags: [dinghy, slides, revealjs, yaml, prezi]
image: /assets/img/blog/cover-slide-builder.svg
draft: true
---

![Slide Builder: RevealJS in YAML, with Prezi-style zoom](/assets/img/blog/cover-slide-builder.svg)

Slide decks have a strange status in engineering: we make them constantly, but we treat them as throwaway. They never live in a repo. They never go through review. The image you spent twenty minutes aligning in Keynote is gone the moment the talk ends.

Dinghy's **Slide Builder** treats a slide deck like any other artifact: a folder of source files that compiles to a single deliverable.

<!-- truncate -->

## What it is

A presentation builder layered on top of [RevealJS](https://revealjs.com/), wired into the same Dinghy CLI you already have:

- **YAML DSL** — keys map to HTML elements, so you describe slides in a structured, indented form.
- **Markdown and HTML** auto-loaded — drop a `.md` file in the deck folder and it becomes a slide.
- **Self-contained HTML output** — assets inline, single file you can share or host anywhere.
- **Live reload dev server** — `dinghy slide start` and edit-to-reload feedback.
- **Prezi-style zoom and pan** — exclusive to Dinghy, more on this below.

## A YAML slide

The core idea is that a slide is just a tree of HTML elements, and YAML happens to be a tidy way to describe nested structure:

```yaml
sections:
  - badge: Show Case
    title: Slide Builder
    subtitle: author RevealJS presentations in YAML
    ul:
      li:
        - YAML DSL maps keys to HTML elements
        - Self-contained HTML output
        - Live reload development server
```

Each key (`badge`, `title`, `ul`, `li`, …) maps to either a semantic block or a raw HTML element. Multi-file decks are just multiple YAML files in the same folder, picked up in alphabetical order.

## A Markdown slide

If you want to drop a section in fast, plain Markdown works:

```markdown
## Slide Builder

- YAML DSL maps keys to HTML elements
- Self-contained HTML output
- Live reload dev server
```

Markdown files become slides automatically. You can mix YAML, Markdown, and raw HTML in the same deck — pick the right tool per slide.

## The single-file output

Run `dinghy slide build` and you get **one HTML file**, with every image, font, and dependency inlined. Nothing to host. Drag it into a chat. Open it offline. Email it. RevealJS' rendering is intact, navigation works, the speaker view works.

This is the killer feature for talks at conferences with sketchy WiFi: your deck is a self-contained artifact that does not depend on anything but a browser.

## The Prezi-style trick

The one thing that is genuinely Dinghy-exclusive is **zoom-and-pan slides** — declared with image coordinates, the deck zooms into a region of an image instead of cutting to a new slide:

```yaml
- id: dinghy-proxy-project
  img: imgs/dinghy-proxy-project.png
  width: 1562
  height: 1398
  sections:
    - id: dinghy-proxy-title
      x1: 71
      y1: 842
      x2: 954
      y2: 1132
    - id: dinghy-proxy-ruby
      title: ❤️
      x1: 1052
      y1: 119
      x2: 1550
      y2: 293
```

The deck flies into each rectangle in turn. Useful for architecture diagrams that you want to walk through region by region without redrawing them five times. If you have ever sat through a Prezi deck and thought "this would be neat if it had less Prezi", that is the shape of this feature.

## Why bother

The same reasons code-as-source pays off everywhere else:

- The deck is in the repo, gets reviewed, gets diffed.
- Refactor a slide once, every deck that includes it updates.
- The output is one file, not a Keynote bundle, not a Google Slides URL, not a "you need to be on the corp VPN" dependency.

If you are giving more than a couple of talks a year, the cost of authoring in YAML is repaid by the sixth or seventh deck.

---

Next up: [Dinghy in the AI age](#) — how this stack plays with code-generation and AI assistants.
