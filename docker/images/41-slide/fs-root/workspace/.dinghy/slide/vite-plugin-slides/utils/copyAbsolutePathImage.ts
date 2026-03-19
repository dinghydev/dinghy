import fs from "node:fs";
import path from "node:path";
import { ROOT } from "../config/constants";
import { logger } from "./logger";
import { Context } from "../config/context";

export function copyAbsolutePathImage(imgPath: string, ctx: Context): void {
  if (!imgPath.startsWith("/")) return;
  const src = path.join(ROOT, imgPath);
  const dest = path.join(ctx.outputDevDir, "assets", imgPath);
  if (!fs.existsSync(src)) {
    logger.warn(`[slides] Image not found: ${src}`);
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}
