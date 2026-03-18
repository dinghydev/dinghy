import fs from "node:fs";
import path from "node:path";
import { OUTPUT_DEV_DIR, SLIDES_DIR } from "../config/constants";
import { renderSlideHTML } from "../renderers/renderSlideHTML";
import { renderIndexHTML } from "../renderers/renderIndexHTML";
import { loadSlidesData } from "../config/loadSlidesData";
import { processAssets } from "../renderers/processAssets";
import { assembleRawHtml } from "../renderers/assembleRawHtml";
import { handleSlideError } from "./handleSlideError";

function generateSlide(
  name: string,
  slide: ReturnType<typeof loadSlidesData>["slides"][string],
  trailingSlash: boolean,
): { slug: string; label: string } | null {
  const slug = slide.slug ?? name;
  const title = slide.title!;
  const slideOutputDir = (slug === "" || trailingSlash)
    ? path.join(OUTPUT_DEV_DIR, slug)
    : OUTPUT_DEV_DIR;
  const slideSourceDir = path.join(SLIDES_DIR, name);

  fs.mkdirSync(slideOutputDir, { recursive: true });

  const rawHtml = assembleRawHtml(slide);
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
  const html = processAssets(combinedHtml, slideSourceDir);

  if (slug === "") {
    fs.writeFileSync(path.join(OUTPUT_DEV_DIR, "index.html"), html);
    return null;
  } else if (trailingSlash) {
    fs.writeFileSync(path.join(slideOutputDir, "index.html"), html);
  } else {
    fs.writeFileSync(path.join(OUTPUT_DEV_DIR, `${slug}.html`), html);
  }
  return { slug, label: title };
}

export function generateSlides(): { inlineAssets: boolean } {
  const { config: globalConfig, slides, trailingSlash } = loadSlidesData();
  const inlineAssets = process.env.DINGHY_SLIDE_INLINE_ASSETS !== undefined
    ? process.env.DINGHY_SLIDE_INLINE_ASSETS !== "false"
    : globalConfig.inlineAssets !== false;

  if (Object.keys(slides).length === 0) {
    console.error("No slides found");
    process.exit(1);
  }

  fs.mkdirSync(OUTPUT_DEV_DIR, { recursive: true });

  const entries: { slug: string; label: string }[] = [];
  let hasRootSlide = false;

  for (const [name, slide] of Object.entries(slides)) {
    try {
      const entry = generateSlide(name, slide, trailingSlash);
      if (entry === null) {
        hasRootSlide = true;
      } else {
        entries.push(entry);
      }
    } catch (err) {
      handleSlideError(slide, trailingSlash, err);
    }
  }

  if (!hasRootSlide && globalConfig.generateSlidesIndex) {
    fs.writeFileSync(
      path.join(OUTPUT_DEV_DIR, "index.html"),
      renderIndexHTML(entries, trailingSlash),
    );
  }

  const slugs = [
    ...(hasRootSlide ? ["(root)"] : []),
    ...entries.map((e) => e.slug),
  ];
  console.log(`[slides] Generated: ${slugs.join(", ") || "(none)"}`);
  return { inlineAssets };
}
