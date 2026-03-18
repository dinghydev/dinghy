import path from "node:path";

export const ROOT = process.cwd();
export const SLIDES_DIR = path.join(
  ROOT,
  process.env.DINGHY_SLIDE_SLIDES_DIR ?? "slides",
);
export const SLIDES_YML = path.join(SLIDES_DIR, "slides.yml");
export const OUTPUT_DEV_DIR = path.resolve(
  "output",
  process.env.DINGHY_SLIDE_OUTPUT_DEV_DIR ?? "slides-dev",
);
export const BASE = (process.env.DINGHY_SLIDE_BASE_URL ?? "/").replace(
  /\/?$/,
  "/",
);

export const IMG_ATTRIBUTES = [
  "src",
  "data-preview-image",
  "data-background-image",
] as const;

// RevealJS default design dimensions — used to compute absolute positions for auto-animate
export const SLIDE_W = 960;
export const SLIDE_H = 700;

export const DEFAULT_REVEAL_CONFIG = {
  theme: "black",
  hash: true,
  plugins: [{ name: "zoom" }, { name: "notes" }, { name: "highlight" }] as {
    name: string;
    path?: string;
  }[],
};
