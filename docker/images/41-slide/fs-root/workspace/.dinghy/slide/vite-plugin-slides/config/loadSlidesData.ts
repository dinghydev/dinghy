import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { z } from "zod";
import { handleSlideError } from "../generators/handleSlideError";

import {
  RevealGlobalConfig,
  RevealGlobalConfigSchema,
  Slide,
  SlideSchema,
  SlidesData,
} from "./schemas";
import { SLIDES_DIR, SLIDES_YML } from "./constants";
import { logger } from "../utils/logger";

function loadFile(
  f: string,
  dir: string,
  section: Record<string, unknown>,
) {
  console.log("loadFile", f, dir);
  if (f.endsWith(".yml")) {
    const ymlData = yaml.load(
      fs.readFileSync(path.join(dir, f), "utf-8"),
    ) as Record<string, unknown> | null;
    const ymlSections = (ymlData?.sections as unknown[] | undefined) ?? [];
    loadReferencedFiles(ymlSections, dir);
    section.sections ??= [];
    (section.sections as unknown[]).push(...ymlSections);
    return;
  }
  delete section.file;
  const content = fs.readFileSync(path.join(dir, f), "utf-8");
  if (f.endsWith(".md")) {
    section.markdown = content;
    section.type = "markdown";
  } else {
    f.endsWith(".css")
      ? section.html = `<style>\n${content}</style>`
      : section.html = content;
  }
}

function loadReferencedFiles(
  sections: unknown[],
  dir: string,
) {
  for (const section of sections) {
    if (!section || typeof section !== "object") {
      continue;
    }
    let s = section as Record<string, unknown>;
    if (typeof s.file === "string") {
      loadFile(s.file, dir, s);
    }
    if (Array.isArray(s.sections)) {
      loadReferencedFiles(s.sections, dir);
    }
  }
}

function loadSlide(name: string): Record<string, unknown> {
  const dir = path.join(SLIDES_DIR, name);
  const slideYml = path.join(dir, "slide.yml");
  const raw: Record<string, unknown> = fs.existsSync(slideYml)
    ? (yaml.load(fs.readFileSync(slideYml, "utf-8")) as Record<
      string,
      unknown
    > ?? {})
    : {};
  const referencedFiles = new Set<string>();

  loadReferencedFiles(
    (raw.sections as unknown[] | undefined) ?? [],
    dir,
  );
  const allFiles = fs.readdirSync(dir)
    .filter((
      f,
    ) => (f.endsWith(".html") || f.endsWith(".md") || f.endsWith(".css") ||
      (f.endsWith(".yml") && f !== "slide.yml"))
    )
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
    );
  if (allFiles.length > 0) {
    raw.sections ??= [];
    allFiles.flatMap((f) => {
      const section = {};
      (raw.sections as unknown[]).push(section);
      loadFile(f, dir, section);
    });
  }

  return raw;
}

export function loadSlidesData(): SlidesData {
  let globalConfig: RevealGlobalConfig = RevealGlobalConfigSchema.parse({});
  const rawSlidesMap: Record<string, unknown> = {};

  // load from slides/slides.yml
  if (fs.existsSync(SLIDES_YML)) {
    const rawYml = (yaml.load(fs.readFileSync(SLIDES_YML, "utf-8")) as Record<
      string,
      unknown
    >) ?? {};
    const { slides: rawSlidesRecord, ...rootConfig } = rawYml;
    const { config: nestedConfig, ...rawSlides } =
      (rawSlidesRecord as Record<string, unknown> | undefined) ?? {};
    globalConfig = RevealGlobalConfigSchema.parse({
      ...rootConfig,
      ...(nestedConfig as Record<string, unknown> ?? {}),
    });
    Object.assign(rawSlidesMap, rawSlides);
  }

  const trailingSlash = process.env.DINGHY_SLIDE_TRAILING_SLASH !== undefined
    ? process.env.DINGHY_SLIDE_TRAILING_SLASH === "true"
    : globalConfig.trailingSlash === true;

  // 3+4: scan slides/ folder; each subfolder with a slide.yml is a slide
  if (fs.existsSync(SLIDES_DIR)) {
    for (const entry of fs.readdirSync(SLIDES_DIR, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      try {
        const raw = loadSlide(entry.name);
        if (raw.sections) {
          rawSlidesMap[entry.name] = raw;
        } else {
          logger.warn(`[slides] No sections found in ${entry.name}`);
        }
      } catch (err) {
        handleSlideError(
          { name: entry.name } as unknown as Slide,
          trailingSlash,
          err,
        );
      }
    }
  }

  // Parse slides, using globalConfig as defaults for each slide's config
  const slides: Record<string, z.infer<typeof SlideSchema>> = {};

  for (const [name, rawSlide] of Object.entries(rawSlidesMap)) {
    try {
      const raw = rawSlide as Record<string, unknown>;
      raw.name ??= name;
      const slide = SlideSchema.parse({
        ...raw,
        config: {
          ...globalConfig,
          ...(raw.config as Record<string, unknown> ?? {}),
        },
      });
      slide.title ??= name.replace(/-/g, " ").replace(
        /^\w/,
        (c) => c.toUpperCase(),
      );
      slides[name] = slide;
    } catch (err) {
      handleSlideError(
        rawSlide as unknown as Slide,
        trailingSlash,
        err,
      );
    }
  }

  return { config: globalConfig, slides, trailingSlash };
}
