import fs from "node:fs";
import path from "node:path";
import { Slide } from "../config/schemas";

const template = fs.readFileSync(
  path.join(import.meta.dirname, "../templates/slide-template.html"),
  "utf-8",
);

export function renderSlideHTML(
  slide: Slide,
  combinedHtml: string,
  faviconTag: string = "",
): string {
  const { theme, plugins: configPlugins, ...revealOptions } = slide.config;
  const revealConfig = JSON.stringify(revealOptions);

  const hasMarkdown = combinedHtml.includes('<textarea data-template');
  const needsMarkdown = hasMarkdown &&
    !configPlugins.some((p) => p.name === "markdown");
  const plugins = needsMarkdown
    ? (() => {
      const highlightIdx = configPlugins.findIndex((p) =>
        p.name === "highlight"
      );
      if (highlightIdx === -1) return [...configPlugins, { name: "markdown" }];
      return [
        ...configPlugins.slice(0, highlightIdx),
        { name: "markdown" },
        ...configPlugins.slice(highlightIdx),
      ];
    })()
    : configPlugins;

  const PLUGIN_CSS: Record<string, string> = {
    highlight: "reveal.js/plugin/highlight/monokai.css",
  };

  const pluginVar = (name: string) =>
    `Reveal${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  const pluginCss = plugins
    .filter((p) => PLUGIN_CSS[p.name])
    .map((p) => `import '${PLUGIN_CSS[p.name]}'`)
    .join("\n      ");
  const pluginImports = plugins.map((p) => {
    const src = p.path ?? `reveal.js/plugin/${p.name}/${p.name}.esm.js`;
    return `import ${pluginVar(p.name)} from '${src}'`;
  }).join("\n      ");
  const pluginList = plugins.map((p) =>
    p.name === "math" ? "RevealMath.KaTeX" : pluginVar(p.name)
  ).join(", ");

  return template
    .replace("<!--TITLE-->", slide.title ?? "")
    .replace("<!--FAVICON-->", faviconTag)
    .replace(
      "<!--SECTIONS-->",
      combinedHtml,
    )
    .replace("<!--THEME-->", theme)
    .replace("<!--PLUGIN_CSS-->", pluginCss)
    .replace("<!--PLUGIN_IMPORTS-->", pluginImports)
    .replace("<!--REVEAL_CONFIG-->", revealConfig)
    .replace("<!--PLUGIN_LIST-->", pluginList);
}
