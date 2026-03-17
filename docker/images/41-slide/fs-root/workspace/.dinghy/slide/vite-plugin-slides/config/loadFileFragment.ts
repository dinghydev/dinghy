import fs from "node:fs";
import path from "node:path";

import { Slide } from "./schemas";
import { SLIDES_DIR } from "./constants";

export function loadFileFragment(
  file: string,
  slide: Slide,
) {
  const dir = path.join(SLIDES_DIR, slide.name!);
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
