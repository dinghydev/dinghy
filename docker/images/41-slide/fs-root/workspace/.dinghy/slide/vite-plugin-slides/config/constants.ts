import path from "node:path";

export const ROOT = process.cwd();

export const MEDIA_ATTRIBUTES = [
  "src",
  "data-preview-image",
  "data-preview-video",
  "data-background-image",
  "data-background-video",
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
