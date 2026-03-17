import fs from "node:fs";
import path from "node:path";
import { OUTPUT_DEV_DIR } from "../config/constants";
import { logger } from "../utils/logger";
import { Slide } from "../config/schemas";

export function handleSlideError(
  slide: Slide,
  trailingSlash: boolean,
  err: unknown,
): void {
  if (process.argv.includes("build")) {
    throw err;
  }
  logger.error(`[slides] Failed to generate slide "${slide.name!}"`, err);
  const slug = slide.slug === undefined ? slide.name! : slide.slug!;
  const errorOutputDir = (slug === "" || trailingSlash)
    ? path.join(OUTPUT_DEV_DIR, slug)
    : OUTPUT_DEV_DIR;
  const errorOutputPath = (slug === "" || trailingSlash)
    ? path.join(errorOutputDir, "index.html")
    : path.join(OUTPUT_DEV_DIR, `${slug}.html`);
  fs.mkdirSync(errorOutputDir, { recursive: true });
  const message = err instanceof Error ? err.message : String(err);
  fs.writeFileSync(
    errorOutputPath,
    `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Error: ${slide
      .name!}</title></head><body style="font-family:monospace;padding:2rem;background:#1a1a1a;color:#ff6b6b"><h1>Error generating slide: ${slide
      .name!}</h1><pre>${message}</pre></body></html>`,
  );
}
