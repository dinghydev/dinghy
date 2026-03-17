import fs from "node:fs";
import path from "node:path";
import { OUTPUT_DEV_DIR, ROOT } from "../config/constants";
import { logger } from "./logger";

export function copyAbsolutePathImage(imgPath: string): void {
  if (!imgPath.startsWith("/")) return;
  const src = path.join(ROOT, imgPath);
  const dest = path.join(OUTPUT_DEV_DIR, "assets", imgPath);
  if (!fs.existsSync(src)) {
    logger.warn(`[slides] Image not found: ${src}`);
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}
