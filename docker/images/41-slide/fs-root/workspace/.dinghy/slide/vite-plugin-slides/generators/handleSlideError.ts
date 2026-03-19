import fs from "node:fs";
import path from "node:path";
import { logger } from "../utils/logger";
import { Slide } from "../config/schemas";
import { Context } from "../config/context";

export function handleSlideError(
  slide: Slide,
  ctx: Context,
  err: unknown,
): void {
  if (process.argv.includes("build")) {
    throw err;
  }
  logger.error(`[slides] Failed to generate slide "${slide.name!}"`, err);
  const slug = slide.slug === undefined ? slide.name! : slide.slug!;
  const errorOutputDir = (slug === "" || ctx.globalConfig.trailingSlash)
    ? path.join(ctx.outputDevDir, slug)
    : ctx.outputDevDir;
  const errorOutputPath = (slug === "" || ctx.globalConfig.trailingSlash)
    ? path.join(errorOutputDir, "index.html")
    : path.join(ctx.outputDevDir, `${slug}.html`);
  fs.mkdirSync(errorOutputDir, { recursive: true });
  const message = err instanceof Error ? err.message : String(err);
  fs.writeFileSync(
    errorOutputPath,
    `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Error: ${slide
      .name!}</title></head><body style="font-family:monospace;padding:2rem;background:#1a1a1a;color:#ff6b6b"><h1>Error generating slide: ${slide
      .name!}</h1><pre>${message}</pre></body></html>`,
  );
}
