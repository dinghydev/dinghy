import fs from "node:fs";
import path from "node:path";
import { renderSlideHTML } from "../renderers/renderSlideHTML";
import { renderIndexHTML } from "../renderers/renderIndexHTML";
import { loadSlidesData } from "../config/loadSlidesData";
import { processAssets } from "../renderers/processAssets";
import { assembleRawHtml } from "../renderers/assembleRawHtml";
import { handleSlideError } from "./handleSlideError";
import { Context } from "../config/context";
import { logger } from "../utils/logger";
import { Slide } from "../config/schemas";

function generateSlide(
  name: string,
  slide: Slide,
  ctx: Context,
): { slug: string; label: string } | null {
  const slug = slide.slug ?? name;
  const title = slide.title!;
  const slideOutputDir = (slug === "" || ctx.globalConfig.trailingSlash)
    ? path.join(ctx.outputDevDir, slug)
    : ctx.outputDevDir;
  const slideSourceDir = path.join(ctx.slidesDir, name);

  fs.mkdirSync(slideOutputDir, { recursive: true });

  const rawHtml = assembleRawHtml(slide, ctx);
  const slideCss = fs.readFileSync(
    path.join(import.meta.dirname, "../templates/slide.css"),
    "utf-8",
  );

  const faviconTag = (() => {
    for (const ext of ["svg", "png", "ico", "webp"]) {
      if (fs.existsSync(path.join(slideSourceDir, `favicon.${ext}`))) {
        return `<link rel="icon" href="favicon.${ext}" />`;
      }
    }
    return "";
  })();

  const combinedHtml = renderSlideHTML(
    slide,
    `<style>\n${slideCss}\n</style>\n${rawHtml}`,
    faviconTag,
  );
  const html = processAssets(combinedHtml, slideSourceDir, ctx);

  if (slug === "") {
    fs.writeFileSync(path.join(ctx.outputDevDir, "index.html"), html);
    return null;
  } else if (ctx.globalConfig.trailingSlash) {
    fs.writeFileSync(path.join(slideOutputDir, "index.html"), html);
  } else {
    fs.writeFileSync(path.join(ctx.outputDevDir, `${slug}.html`), html);
  }
  return { slug, label: title };
}

export function generateSlides(ctx: Context) {
  const slides = loadSlidesData(ctx);
  if (Object.keys(slides).length === 0) {
    logger.error("No slides found");
    return;
  }

  fs.mkdirSync(ctx.outputDevDir, { recursive: true });

  const entries: { slug: string; label: string }[] = [];
  let hasRootSlide = false;

  for (const [name, slide] of Object.entries(slides)) {
    try {
      const entry = generateSlide(name, slide, ctx);
      if (entry === null) {
        hasRootSlide = true;
      } else {
        entries.push(entry);
      }
    } catch (err) {
      handleSlideError(slide, ctx, err);
    }
  }

  if (!hasRootSlide && ctx.globalConfig.generateSlidesIndex) {
    fs.writeFileSync(
      path.join(ctx.outputDevDir, "index.html"),
      renderIndexHTML(entries, ctx),
    );
  }

  const slugs = [
    ...(hasRootSlide ? ["(root)"] : []),
    ...entries.map((e) => e.slug),
  ];
  console.log(`[slides] Generated: ${slugs.join(", ") || "(none)"}`);
}
