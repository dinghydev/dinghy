import fs from "node:fs";
import path from "node:path";

import { Slide } from "./schemas";
import { Context } from "./context";

export function loadFileFragment(
  file: string,
  slide: Slide,
  ctx: Context,
) {
  const dir = path.join(ctx.slidesDir, slide.name!);
  const content = fs.readFileSync(path.join(dir, file), "utf-8");
  if (file.endsWith(".md")) {
    return {
      type: "markdown",
      content,
    };
  } else if (file.endsWith(".html")) {
    return {
      type: "html",
      content,
    };
  } else {
    throw new Error(`Unsupported file type: ${file}`);
  }
}
