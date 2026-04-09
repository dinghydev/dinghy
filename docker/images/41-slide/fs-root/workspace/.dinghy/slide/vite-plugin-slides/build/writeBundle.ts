import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import minifyHtml from "@minify-html/node";
import { MEDIA_ATTRIBUTES, ROOT } from "../config/constants";
import { Context } from "../config/context";

function hasAttr(tag: string, attr: string, value: string): boolean {
  return new RegExp(`\\b${attr}=["']${value}["']`).test(tag);
}

function getAttr(tag: string, attr: string): string | undefined {
  const m = tag.match(new RegExp(`\\b${attr}=["']([^"']*)["']`));
  return m?.[1];
}

function isExternalSrc(src: string): boolean {
  return /^(https?:\/\/|data:)/.test(src);
}

function urlToDistPath(urlPath: string, fileDir: string, outDir: string): string {
  if (urlPath.startsWith("/")) return urlPath.slice(1);
  const resolved = path.resolve(fileDir, urlPath);
  return path.relative(outDir, resolved);
}

const MIME_TYPES: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  svg: "image/svg+xml",
  webp: "image/webp",
  // mp4: "video/mp4",
  // webm: "video/webm",
  // ogg: "video/ogg",
  // ogv: "video/ogg",
  // mov: "video/quicktime",
};

function urlToDataUri(filePath: string): string | null {
  if (!fs.existsSync(filePath)) return null;
  const ext = path.extname(filePath).slice(1).toLowerCase();
  const mime = MIME_TYPES[ext];
  if (!mime) return null;
  const data = fs.readFileSync(filePath).toString("base64");
  return `data:${mime};base64,${data}`;
}

function inlineChunks(scriptPath: string, seen = new Set<string>()): string {
  if (seen.has(scriptPath)) return fs.readFileSync(scriptPath, "utf-8");
  seen.add(scriptPath);
  return fs.readFileSync(scriptPath, "utf-8").replace(
    /\bimport\(["'](\.[^"']+)["']\)/g,
    (original, rel) => {
      const chunkPath = path.resolve(path.dirname(scriptPath), rel);
      if (!fs.existsSync(chunkPath)) return original;
      const chunkContent = inlineChunks(chunkPath, seen);
      return `import(URL.createObjectURL(new Blob([${
        JSON.stringify(chunkContent)
      }],{type:'text/javascript'})))`;
    },
  );
}

export function handleWriteBundle(outDir: string, ctx: Context): void {
  const toDelete = new Set<string>();

  function resolveImg(
    src: string,
    imgPath: string,
    match: string,
    replaceSrc: (newSrc: string) => string,
    currentFileDir: string,
  ): string {
    if (isExternalSrc(src)) return match;
    if (ctx.globalConfig.inlineAssets) {
      const dataUri = urlToDataUri(imgPath);
      if (dataUri){
        const distPath = path.join(outDir, src);
        if (fs.existsSync(distPath)) toDelete.add(distPath);
        return replaceSrc(dataUri);
      }
    }
    if (!fs.existsSync(imgPath)) return match;
    const content = fs.readFileSync(imgPath);
    const hash = crypto.createHash("md5").update(content).digest("hex").slice(
      0,
      8,
    );
    const ext = path.extname(src);
    const base = path.basename(src, ext);
    const assetRelPath = `assets/${base}.${hash}${ext}`;
    const destPath = path.join(outDir, assetRelPath);
    const hashedSrc = path.relative(currentFileDir, destPath).split(path.sep).join("/");
    if (!fs.existsSync(destPath)) {
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(imgPath, destPath);
    }
    return replaceSrc(hashedSrc);
  }

  function processHTML(htmlPath: string): void {
    let html = fs.readFileSync(htmlPath, "utf-8");
    const slideOutputDir = path.dirname(htmlPath);
    // derive source dir from output dir path relative to outDir
    const rel = path.relative(outDir, slideOutputDir);
    const slideSourceDir = path.join(ctx.outputDevDir, rel);

    if (ctx.globalConfig.inlineAssets) {
      // Remove modulepreload links (any attribute order)
      html = html.replace(/<link\b[^>]*>/g, (tag) => {
        if (hasAttr(tag, "rel", "modulepreload")) return "";
        return tag;
      });

      // Inline favicon
      html = html.replace(/<link\b[^>]*>/g, (tag) => {
        if (!hasAttr(tag, "rel", "icon")) return tag;
        const href = getAttr(tag, "href");
        if (!href) return tag;
        const assetPath = path.join(
          outDir,
          urlToDistPath(href, slideOutputDir, outDir),
        );
        const dataUri = urlToDataUri(assetPath);
        if (!dataUri) return tag;
        toDelete.add(assetPath);
        return `<link rel="icon" href="${dataUri}" />`;
      });

      // Inline stylesheets (any attribute order)
      html = html.replace(/<link\b[^>]*>/g, (tag) => {
        if (!hasAttr(tag, "rel", "stylesheet")) return tag;
        const href = getAttr(tag, "href");
        if (!href) return tag;
        const assetPath = path.join(
          outDir,
          urlToDistPath(href, slideOutputDir, outDir),
        );
        if (!fs.existsSync(assetPath)) return tag;
        toDelete.add(assetPath);
        return `<style>${fs.readFileSync(assetPath, "utf-8")}</style>`;
      });

      // Inline module scripts (any attribute order)
      html = html.replace(/<script\b[^>]*><\/script>/g, (tag) => {
        if (!hasAttr(tag, "type", "module")) return tag;
        const src = getAttr(tag, "src");
        if (!src) return tag;
        const assetPath = path.join(
          outDir,
          urlToDistPath(src, slideOutputDir, outDir),
        );
        if (!fs.existsSync(assetPath)) return tag;
        toDelete.add(assetPath);
        return `<script type="module">${inlineChunks(assetPath)}</script>`;
      });

      // Inline static imports inside inline module scripts using top-level await + blob URLs.
      // Vite embeds the bundled script inline but still code-splits dynamic chunks,
      // leaving broken relative imports like from"./notes.esm-xxx.js".
      html = html.replace(
        /<script type="module">([\s\S]*?)<\/script>/g,
        (_, content) => {
          const processed = content.replace(
            /\bimport\s*\{([^}]*)\}\s*from\s*["'](\.\/[^"']+)["']/g,
            (original: string, bindingsStr: string, rel: string) => {
              const chunkPath = path.join(outDir, "assets", path.basename(rel));
              if (!fs.existsSync(chunkPath)) return original;
              toDelete.add(chunkPath);
              const blob = `URL.createObjectURL(new Blob([${
                JSON.stringify(inlineChunks(chunkPath))
              }],{type:'text/javascript'}))`;
              const bindings = bindingsStr.replace(/\s+as\s+/g, ":").trim();
              return `const{${bindings}}=await import(${blob})`;
            },
          );
          return `<script type="module">${processed}</script>`;
        },
      );

      // Inline images inside <textarea data-template> (markdown sections)
      html = html.replace(
        /(<textarea\b[^>]*data-template[^>]*>)([\s\S]*?)(<\/textarea>)/g,
        (_, open, content, close) => {
          const inlined = content.replace(
            /(<img\b[^>]*\ssrc=["'])([^"']+)(["'])/g,
            (match: string, pre: string, src: string, post: string) => {
              const imgPath = /^\.\.?\//.test(src)
                ? path.join(slideSourceDir, src)
                : path.join(ctx.outputDevDir, src);
              return resolveImg(
                src,
                imgPath,
                match,
                (d) => `${pre}${d}${post}`,
                slideOutputDir,
              );
            },
          );
          return open + inlined + close;
        },
      );
    }

    // Process MEDIA_ATTRIBUTES: inline as data URI or copy to outDir
    html = html.replace(
      new RegExp(
        `(\\b(?:${MEDIA_ATTRIBUTES.join("|")})=["'])([^"']+)(["'])`,
        "g",
      ),
      (match, pre, src, post) =>
        resolveImg(
          src,
          path.join(ctx.outputDevDir, src),
          match,
          (d) => `${pre}${d}${post}`,
          slideOutputDir,
        ),
    );

    // Process parallaxBackgroundImage in Reveal config: inline as data URI or copy to outDir
    html = html.replace(
      /\bparallaxBackgroundImage"?\s*:\s*"([^"]+)"/g,
      (match, src) =>
        resolveImg(
          src,
          path.join(ctx.outputDevDir, src),
          match,
          (d) => match.replace(`"${src}"`, `"${d}"`),
          slideOutputDir,
        ),
    );

    const minified = minifyHtml.minify(Buffer.from(html), {
      minify_css: true,
      minify_js: true,
    });
    fs.writeFileSync(htmlPath, minified);
  }

  function processJS(jsPath: string): void {
    let js = fs.readFileSync(jsPath, "utf-8");
    js = js.replace(
      /\bparallaxBackgroundImage"?\s*:\s*"([^"]+)"/g,
      (match, src) =>
        resolveImg(
          src,
          path.join(ctx.outputDevDir, src),
          match,
          (d) => match.replace(`"${src}"`, `"${d}"`),
          path.dirname(jsPath),
        ),
    );
    fs.writeFileSync(jsPath, js);
  }

  function walk(dir: string): void {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith(".html")) processHTML(full);
      else if (entry.name.endsWith(".js")) processJS(full);
    }
  }
  walk(outDir);

  for (const f of toDelete) fs.rmSync(f);

  // Remove directories that became empty after deletion
  function removeEmptyDirs(dir: string): void {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) removeEmptyDirs(path.join(dir, entry.name));
    }
    if (dir !== outDir && fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
  }
  removeEmptyDirs(outDir);

  if (!ctx.globalConfig.inlineAssets) return;

  // Copy reveal.js plugin HTML assets (e.g. notes.html) next to each slide
  // After inlining, import.meta.url === page URL so plugins look for their
  // HTML files relative to the page directory.
  const revealPluginDir = path.join(ROOT, "node_modules/reveal.js/plugin");
  if (fs.existsSync(revealPluginDir)) {
    const pluginHtmlFiles: string[] = [];
    for (const name of fs.readdirSync(revealPluginDir)) {
      const f = path.join(revealPluginDir, name, `${name}.html`);
      if (fs.existsSync(f)) pluginHtmlFiles.push(f);
    }
    if (pluginHtmlFiles.length > 0) {
      function copyPluginHtml(dir: string): void {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const full = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            copyPluginHtml(full);
          } else if (entry.name === "index.html") {
            for (const src of pluginHtmlFiles) {
              fs.copyFileSync(src, path.join(dir, path.basename(src)));
            }
          }
        }
      }
      copyPluginHtml(outDir);
      // root-level index.html
      if (fs.existsSync(path.join(outDir, "index.html"))) {
        for (const src of pluginHtmlFiles) {
          fs.copyFileSync(src, path.join(outDir, path.basename(src)));
        }
      }
    }
  }
}
