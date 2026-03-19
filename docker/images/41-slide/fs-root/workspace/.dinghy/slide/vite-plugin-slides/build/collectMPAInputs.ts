import fs from "node:fs";
import path from "node:path";
import { Context } from "../config/context";

export function collectMPAInputs(ctx: Context): Record<string, string> {
  const input: Record<string, string> = {};
  function walk(dir: string): void {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== "assets") walk(abs);
      } else if (entry.isFile() && entry.name.endsWith(".html")) {
        const rel = path.relative(ctx.outputDevDir, abs);
        const key = rel.replace(/\/index\.html$/, "").replace(/\.html$/, "") ||
          "index";
        input[key] = abs;
      }
    }
  }
  walk(ctx.outputDevDir);
  return input;
}
