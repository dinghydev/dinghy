import fs from "node:fs";
import path from "node:path";
import { BASE } from "../config/constants";

const template = fs.readFileSync(
  path.join(import.meta.dirname, "../templates/index-template.html"),
  "utf-8",
);

export function renderIndexHTML(
  entries: { slug: string; label: string }[],
  trailingSlash: boolean,
): string {
  const links = entries.map(({ slug, label }) => {
    const href = trailingSlash ? `${BASE}${slug}/` : `${BASE}${slug}.html`;
    return `      <li><a href="${href}">${label}</a></li>`;
  }).join("\n");
  return template.replace("<!--LINKS-->", links);
}
