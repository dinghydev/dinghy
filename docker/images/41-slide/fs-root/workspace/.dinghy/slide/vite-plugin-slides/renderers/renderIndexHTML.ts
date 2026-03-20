import fs from "node:fs";
import path from "node:path";
import { Context } from "../config/context";

const template = fs.readFileSync(
  path.join(import.meta.dirname, "../templates/index-template.html"),
  "utf-8",
);

export function renderIndexHTML(
  entries: { slug: string; label: string }[],
  ctx: Context,
): string {
  const links = entries.map(({ slug, label }) => {
    const href = ctx.globalConfig.trailingSlash
      ? `${ctx.globalConfig.baseUrl}${slug}/`
      : `${ctx.globalConfig.baseUrl}${slug}`;
    return `      <li><a href="${href}">${label}</a></li>`;
  }).join("\n");
  return template.replace("<!--LINKS-->", links);
}
