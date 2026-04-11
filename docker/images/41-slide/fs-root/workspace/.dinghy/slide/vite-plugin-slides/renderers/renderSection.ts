import { Section, Slide } from "../config/schemas";
import { logger } from "../utils/logger";
import { renderZoomAndPanSection } from "./renderZoomAndPanSection";
import { sectionTag } from "./sectionTag";
import { loadFileFragment } from "../config/loadFileFragment";
import { Context } from "../config/context";

const SKIP = new Set(["type", "file", "sections"]);
const ATTRIBUTES = new Set([
  "id",
  "class",
  "style",
  "src",
  "href",
  "alt",
  "tag",
]);

// tag aliases: YAML key → HTML tag (and optional class/id)
const ALIASES: Record<string, string> = {
  badge: "div.badge",
  title: "h2.title",
  subtitle: "p.subtitle",
  notes: "aside.notes",
};

function expandVideoShorthand(
  s: Record<string, unknown>,
): string | undefined {
  if (typeof s.video !== "string") return undefined;
  const videoUrl = s.video as string;
  s["data-background-video"] = videoUrl;
  s["data-background-size"] = "contain";
  s["data-background-video-muted"] = true;
  delete s.video;
  return videoUrl;
}

function renderGrid(values: unknown[], slide: Slide, ctx: Context): string {
  const children = values.map((value) => {
    if (typeof value === "object") {
      return renderValue("div", value as Record<string, unknown>, slide, ctx);
    } else {
      return `<div>${value}</div>`;
    }
  }).join(
    "\n            ",
  );
  return `<div class="grid" style="grid-template-columns:repeat(${values.length},${
    (100 / values.length).toFixed(2)
  }%)">\n            ${children}\n          </div>`;
}

function renderValue(
  tag: string,
  value: unknown,
  slide: Slide,
  ctx: Context,
  parentTag?: string,
): string {
  if (
    value && typeof value === "object" &&
    typeof (value as Record<string, unknown>).tag === "string"
  ) {
    tag = (value as Record<string, unknown>).tag as string;
  }
  // text: string → text
  if (tag === "text" && typeof value === "string") {
    return value;
  }
  if (tag === "file" && typeof value === "string") {
    const fragment = loadFileFragment(value, slide, ctx);
    if (fragment.type === "markdown") {
      return `<div data-markdown>${renderMarkdownText(fragment.content)}</div>`;
    } else if (fragment.type === "html") {
      return fragment.content;
    }
  }
  if (tag === "img" && typeof value === "string") {
    return `<img ${
      parentTag === "div" ? "" : "class='r-stretch'"
    } src="${value}" />`;
  }

  // string value → <tag>value</tag>
  if (typeof value === "string") {
    const { openTag, closeTag } = buildTag(tag, {});
    return `${openTag}${value}${closeTag}`;
  }
  // array value → repeat element per item
  if (Array.isArray(value)) {
    if (tag === "grid") {
      return renderGrid(value as unknown[], slide, ctx);
    }
    return value.map((v) => renderValue(tag, v, slide, ctx)).join("\n");
  }
  // object value → collect _-keys as attrs, rest as children
  if (value !== null && typeof value === "object") {
    const obj = value as unknown as Record<string, unknown>;
    const childEntries: [string, unknown][] = [];
    for (const [k, v] of Object.entries(obj)) {
      if (!isAttribute(k)) {
        childEntries.push([k, v]);
      }
    }
    const children = childEntries
      .map(([k, v]) => renderValue(k, v, slide, ctx, tag))
      .join("\n");
    const { openTag, closeTag } = buildTag(tag, obj);
    if (tag === "img" && children) {
      return `<div class="${obj.class || "img"}">${openTag}${children}</div>`;
    }
    return `${openTag}${children}${closeTag}`;
  }
  // fallback
  const { openTag, closeTag } = buildTag(tag, {});
  return `${openTag}${String(value ?? "")}${closeTag}`;
}

// Parse "tag.class" or "tag" into an open/close tag pair with optional extra attrs
function buildTag(
  tagSpec: string,
  extraAttrs: Record<string, unknown>,
): { openTag: string; closeTag: string } {
  const [tagName, ...classParts] = (tagSpec || "div").split(".");
  const classAttr = classParts.length ? ` class="${classParts.join(" ")}"` : "";
  const extras = Object.entries(extraAttrs)
    .filter(([k]) => k !== "tag" && isAttribute(k))
    .map(([k, v]) => v || v === 0 ? ` ${k}="${v}"` : ` ${k}`)
    .join("");
  return {
    openTag: `<${tagName}${classAttr}${extras}>`,
    closeTag: `</${tagName}>`,
  };
}

export function isAttribute(key: string): boolean {
  return ATTRIBUTES.has(key) || key.startsWith("_") || key.includes("-");
}

function renderMarkdownText(raw: string): string {
  const markdown = raw.replaceAll("<", "&lt;").replaceAll(
    ">",
    "&gt;",
  );
  return `<textarea data-template>\n${markdown}\n          </textarea>`;
}

function renderStandardBody(
  section: Record<string, unknown>,
  slide: Slide,
  ctx: Context,
  parentTag?: string,
): string {
  const parts: string[] = [];
  for (const [key, value] of Object.entries(section)) {
    if (SKIP.has(key) || isAttribute(key)) {
      continue;
    }
    if (key === "markdown") {
      parts.push(
        `<div data-markdown>${renderMarkdownText(value as string)}</div>`,
      );
      continue;
    }

    const tagSpec = ALIASES[key] ?? key;
    parts.push(renderValue(tagSpec, value, slide, ctx, parentTag));
  }
  return parts.filter(Boolean).join("\n          ");
}

export function renderSection(
  section: Section,
  slide: Slide,
  ctx: Context,
): string {
  const s = section as Record<string, unknown>;
  const videoUrl = expandVideoShorthand(s);
  if (section.html) {
    const html = section.html as string;
    if (
      !html.includes("<section") && !html.includes("<style")
    ) {
      logger.warn(
        `[slides] <section> tag is required for html: ${section.html}`,
      );
    }
    return html;
  }
  if (section.type === "zoom-and-pan") {
    return renderZoomAndPanSection(section as any);
  }
  if (section.type === "markdown") {
    const { markdown: rawMarkdown, ...rest } = s;
    const markdown = renderMarkdownText(rawMarkdown as string);

    const body = renderStandardBody(rest, slide, ctx);
    if (body) {
      return `${
        sectionTag(s)
      }${body}\n<div data-markdown>${markdown}</div>\n        </section>`;
    } else {
      s["data-markdown"] = true;
      return `${sectionTag(s)}\n${markdown}</section>`;
    }
  }

  const subsections = Array.isArray(s.sections)
    ? s.sections as Section[]
    : undefined;
  let outerBody = renderStandardBody(s, slide, ctx);
  if (!outerBody && videoUrl) {
    outerBody = `<div class="r-stretch" data-preview-video="${videoUrl}" style="cursor:pointer"></div>`;
  }
  const outerSlide = outerBody ? `${sectionTag(s)}${outerBody}</section>` : "";
  if (subsections?.length) {
    let children = subsections.map((cs) => renderSection(cs, slide, ctx)).join(
      "\n",
    );
    return `${outerSlide}${children}`;
  }

  return outerSlide;
}
