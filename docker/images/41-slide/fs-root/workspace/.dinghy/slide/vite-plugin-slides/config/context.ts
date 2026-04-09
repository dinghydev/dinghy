import path from "node:path";
import fs from "node:fs";
import yaml from "js-yaml";
import { RevealGlobalConfig, RevealGlobalConfigSchema } from "./schemas";
import Debug from "debug";
const debug = Debug("dinghy:slide:context");
const ROOT = process.cwd();

export type Context = {
  slidesDir: string;
  slidesYmlFile: string;
  outputDevDir: string;
  outputBuildDir: string;
  globalConfig: RevealGlobalConfig;
  slides: Record<string, unknown>;
};

export function createContext(): Context {
  const slidesDir = path.join(
    ROOT,
    "slides",
  );
  const slidesYmlFile = process.env.DINGHY_SLIDE_SLIDES_YML !== undefined
    ? path.resolve(ROOT, process.env.DINGHY_SLIDE_SLIDES_YML)
    : path.join(slidesDir, "slides.yml");
  let globalConfig: RevealGlobalConfig = RevealGlobalConfigSchema.parse({});

  let slides: Record<string, unknown> = {};

  // load from slides/slides.yml
  if (fs.existsSync(slidesYmlFile)) {
    const rawYml =
      (yaml.load(fs.readFileSync(slidesYmlFile, "utf-8")) as Record<
        string,
        unknown
      >) ?? {};
    const { slides: rawSlides, ...rootConfig } = rawYml;
    globalConfig = RevealGlobalConfigSchema.parse({
      ...globalConfig,
      ...rootConfig,
    });
    if (rawSlides) {
      slides = rawSlides as Record<string, unknown>;
    }
  }

  const outputDevDir = path.resolve(
    "output",
    process.env.DINGHY_SLIDE_OUTPUT_DEV_DIR ?? "slide-dev",
  );

  const outputBuildDir = path.resolve(
    "output",
    process.env.DINGHY_SLIDE_OUTPUT_BUILD_DIR ?? "slide-build",
  );

  if (process.env.DINGHY_SLIDE_THEME) {
    globalConfig.theme = process.env.DINGHY_SLIDE_THEME;
  }
  if (process.env.DINGHY_SLIDE_INLINE_ASSETS !== undefined) {
    globalConfig.inlineAssets =
      process.env.DINGHY_SLIDE_INLINE_ASSETS !== "false";
  }
  if (process.env.DINGHY_SLIDE_TRAILING_SLASH !== undefined) {
    globalConfig.trailingSlash =
      process.env.DINGHY_SLIDE_TRAILING_SLASH === "true";
  }
  if (process.env.DINGHY_SLIDE_FILTER) {
    globalConfig.filter = process.env.DINGHY_SLIDE_FILTER;
  }

  debug("globalConfig => %O", globalConfig);

  return {
    slidesDir,
    slidesYmlFile,
    outputDevDir,
    outputBuildDir,
    globalConfig,
    slides,
  };
}
