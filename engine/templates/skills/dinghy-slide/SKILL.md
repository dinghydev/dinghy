---
name: dinghy-slide
description: Create a new Dinghy Slide presentation (RevealJS). Use when the user wants to create a slide deck, presentation, or talk using Dinghy's "Slide as Code" feature.
argument-hint: [description]
---

Create a new Dinghy Slide presentation. Author RevealJS presentations in YAML,
Markdown, or HTML — output is a self-contained HTML file.

## Workflow

1. **Determine the slide name.** If the user provided a name, use it
   (kebab-case). Otherwise generate a short name (max 5 words, kebab-case) from
   the description — e.g. `quarterly-sales-review`.

2. **Create the presentation folder** at `slides/<slide-name>/`.

3. **Create `slide.yml`** inside that folder. This is the main file and is
   always required. Even when using separate section files, `slide.yml` must
   exist with at least a `title:`.
   - For simple presentations, put all sections in a single `slide.yml`.
   - For larger presentations with many slides, split into named files
     (`10-intro.yml`, `20-demo.yml`, etc.) for easier organization. Keep
     `slide.yml` with just the `title:`.

4. **NEVER generate the `config:` section** in `slide.yml` unless the user
   explicitly requests customization (theme, transition, etc.). The default
   theme and transitions are already good — adding `config:` without being asked
   is a common mistake. If in doubt, leave it out.

5. **Choose the right format for each section.** Prefer inline YAML in
   `slide.yml` unless:
   - The section is markdown-heavy (long prose, tables, code blocks) — use a
     separate `.md` file.
   - The section requires custom styling, animations, or complex HTML — use a
     separate `.html` file.

6. **After generating the slide**, ask the user if they want to run
   `dinghy slide start` to preview it in the browser (http://localhost:3000).
   Also mention these other commands for reference:
   - `dinghy slide build` — build for production (self-contained HTML)
   - `dinghy devcontainer` — open project in VSCode Devcontainer for development

## Project Layout

```
slides/
  slides.yml              <- optional global config (theme, plugins)
  <slide-name>/
    slide.yml             <- required: title + sections
    NN-section-name.yml   <- optional extra YAML sections (sorted by prefix)
    NN-section-name.md    <- optional markdown sections
    NN-section-name.html  <- optional HTML sections (with <section> tags)
    custom.css            <- optional custom CSS (auto-loaded)
    favicon.svg           <- optional favicon (auto-loaded)
    imgs/                 <- images referenced in slides
```

Files other than `slide.yml` are auto-loaded and sorted alphabetically by
filename. Use numeric prefixes (`10-`, `20-`) to control order.

## slide.yml Structure

```yaml
title: Presentation Title
config: # optional RevealJS overrides
  theme: white # black, white, league, beige, night, moon, ...
  transition: fade # none, fade, slide, convex, concave, zoom
  slideNumber: 'c/t'
sections:
  - badge: Section Badge # <div class="badge">
    title: Section Title # <h2>
    subtitle: A short subtitle # <p class="subtitle">
    p: Paragraph text # <p>
    h3: Subheading # <h3>
    img: imgs/photo.jpg # <img class="r-stretch">
    notes: Speaker notes # <aside class="notes">
    ul: # unordered list
      li:
        - Item one
        - Item two
    ol: # ordered list
      li:
        - First
        - Second
    grid: # side-by-side columns
      - img: imgs/a.jpg
      - div: Some text
    sections: # vertical (nested) slides
      - title: Sub-slide 1
      - title: Sub-slide 2
```

## YAML DSL Reference

Any YAML key becomes an HTML element. Special keys:

| Key        | HTML output                        |
| ---------- | ---------------------------------- |
| `title`    | `<h2>...</h2>`                     |
| `subtitle` | `<p class="subtitle">...</p>`      |
| `badge`    | `<div class="badge">...</div>`     |
| `p`        | `<p>...</p>`                       |
| `h3`       | `<h3>...</h3>`                     |
| `notes`    | `<aside class="notes">...</aside>` |
| `ul`/`ol`  | list                               |
| `img`      | `<img>` (r-stretch by default)     |
| `grid`     | side-by-side grid of elements      |
| `pre`      | code block                         |

### Attributes

Built-in attributes — `id`, `class`, `style`, `src`, `href`, `alt` — map
directly to HTML. Keys containing `-` (e.g. `data-*`, `aria-*`) are always
treated as attributes.

```yaml
- id: intro
  class: highlight
  data-background-color: '#1a1a2e'
  title: Styled Slide
```

### Images

```yaml
# Simple — r-stretch applied automatically
- img: imgs/photo.jpg

# With attributes
- img:
    src: imgs/photo.jpg
    style: 'width: 300px'
    class: fragment
```

### Grid Layout

```yaml
- grid:
    - img: imgs/a.jpg
    - div: Text content
    - img: imgs/c.jpg
```

### Fragments (step-by-step reveal)

```yaml
- ul:
    li:
      - class: fragment
        span: Appears first
      - class: fragment fade-up
        span: Fades up second
```

### Inline Markdown

```yaml
- type: markdown
  markdown: |
    ## Markdown Slide 1
    - item 1
    - item 2
    ---
    ## Markdown Slide 2
    Horizontal rule `---` splits into separate slides.
```

### Code Highlighting

Use inline markdown for code blocks. Use `[line-numbers]` after the language to
highlight specific lines per step (RevealJS syntax):

````yaml
- title: Code Example
  markdown: |
    ```js [1-2|3-4|5-6]
    const name = 'world'
    const greeting = `Hello, ${name}!`
    function sayHello() {
      console.log(greeting)
    }
    sayHello()
    ```
````

### Inline HTML

Use `html:` for raw HTML (must include `<section>` tags):

```yaml
- html: '<section><p>Custom <strong>HTML</strong></p></section>'
```

Or drop `.html` files in the presentation folder.

### Zoom and Pan (Prezi-style)

Dinghy-exclusive feature. Zooms into regions of a large image across multiple
slides with smooth auto-animate transitions. Auto-detected when a section has
both `width` and `height` keys (no `type:` needed).

**Section-level keys:**

| Key              | Type    | Required | Description                                    |
| ---------------- | ------- | -------- | ---------------------------------------------- |
| `img`            | string  | yes      | Path to the image file                         |
| `width`          | number  | yes      | Original image width in pixels                 |
| `height`         | number  | yes      | Original image height in pixels                |
| `skip-full-view` | boolean | no       | Skip the initial full-image overview slide     |
| `overlay`        | string  | no       | Default CSS for highlight boxes on all regions |
| `sections`       | array   | yes      | List of zoom regions                           |

**Region keys** (each item in `sections`):

| Key       | Type   | Required | Description                                      |
| --------- | ------ | -------- | ------------------------------------------------ |
| `x1`      | number | yes      | Left edge (pixels in original image)             |
| `y1`      | number | yes      | Top edge                                         |
| `x2`      | number | yes      | Right edge                                       |
| `y2`      | number | yes      | Bottom edge                                      |
| `id`      | string | no       | HTML id for the generated slide                  |
| `title`   | string | no       | HTML title shown centered over the zoomed region |
| `overlay` | string | no       | Per-region CSS override for the highlight box    |

Coordinates `x1,y1,x2,y2` are in **original image pixels**. The renderer scales
and positions the image to fit each region within the 960x700 RevealJS viewport.

**Slide sequence:** full image first (unless `skip-full-view: true`), then one
slide per region with smooth pan/zoom transitions.

Default overlay:
`background:rgba(144,238,144,0.2);border:2px solid rgba(144,238,144,0.6);`

```yaml
- img: architecture.png
  width: 2077
  height: 2096
  skip-full-view: true
  overlay: 'background:rgba(154,62,62,0.2);border:2px solid red;'
  sections:
    - id: engine
      x1: 922
      y1: 80
      x2: 1215
      y2: 1279
    - id: highlighted-area
      x1: 167
      y1: 80
      x2: 702
      y2: 452
      title: '<span style="color:red;">Highlighted area</span>'
      overlay: 'background:rgba(154,62,62,0.2);border:2px solid blue;'
```

### Vertical (Nested) Slides

```yaml
- title: Main Topic
  p: Press down arrow
  sections:
    - title: Sub-slide A
    - title: Sub-slide B
```

## Separate Section Files

### YAML section file (`NN-name.yml`)

```yaml
sections:
  - badge: Topic
    title: My Section
    p: Content here
```

### Markdown section file (`NN-name.md`)

Standard markdown. Use `<!-- .slide: id="my-id" -->` for slide-level attributes.
Horizontal rule `---` splits into multiple slides.

### HTML section file (`NN-name.html`)

Must wrap content in `<section>` tags. Can include `<style>` blocks.

```html
<section id="custom">
  <h2>Custom Slide</h2>
  <p>With full HTML control</p>
</section>
<style>
  #custom h2 {
    color: red;
  }
</style>
```

## Examples

### Simple presentation (single slide.yml)

```yaml
title: Sprint Demo
sections:
  - badge: Welcome
    title: Sprint 42 Demo
    subtitle: What we shipped this sprint

  - title: Feature A
    ul:
      li:
        - Improved search performance
        - Added filter by date range
    notes: Talk about the 3x speedup

  - title: Feature B
    img: imgs/new-dashboard.png

  - title: Questions?
    p: Thank you!
```

### Presentation with separate sections

```
slides/quarterly-review/
  slide.yml                  # title only
  10-introduction.yml        # YAML section
  20-metrics.md              # markdown-heavy section
  30-roadmap.yml             # YAML section
  40-closing.html            # styled HTML section
  custom.css
  imgs/
    chart.png
```

`slide.yml`:

```yaml
title: Q1 Quarterly Review
```
