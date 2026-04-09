import fs from "node:fs";
import path from "node:path";
import { copyAbsolutePathImage } from "../utils/copyAbsolutePathImage";
import { MEDIA_ATTRIBUTES, ROOT } from "../config/constants";
import { logger } from "../utils/logger";
import { Context } from "../config/context";

function toAssetsSrc(
  src: string,
  slideSourceDir: string,
  ctx: Context,
): string | null {
  const hash = src.includes("#") ? src.slice(src.indexOf("#")) : "";
  if (/^(https?:\/\/|data:)/.test(src)) return null;
  if (src.startsWith("/")) {
    copyAbsolutePathImage(src, ctx);
    return `/assets${src}${hash}`;
  }
  const resolved = path.resolve(slideSourceDir, src);
  const rel = path.relative(ROOT, resolved);
  const dest = path.join(ctx.outputDevDir, "assets", rel);
  if (fs.existsSync(resolved)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(resolved, dest);
  } else {
    logger.warn(`[slides] Asset not found: ${resolved}`);
  }
  return `/assets/${rel}${hash}`;
}

function rewriteMarkdown(
  md: string,
  slideSourceDir: string,
  ctx: Context,
): string {
  return md.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    (_, alt, src) => {
      const resolvedSrc = toAssetsSrc(src, slideSourceDir, ctx) ?? src;
      return `<img class="r-stretch" src="${resolvedSrc}"${
        alt ? ` alt="${alt}"` : ""
      } />`;
    },
  );
}

function rewriteHtml(
  content: string,
  slideSourceDir: string,
  ctx: Context,
): string {
  return content
    .replace(
      new RegExp(
        `(\\b(?:${MEDIA_ATTRIBUTES.join("|")})=["'])([^"']+)(["'])`,
        "g",
      ),
      (match, pre, src, post) => {
        const resolved = toAssetsSrc(src, slideSourceDir, ctx);
        return resolved ? `${pre}${resolved}${post}` : match;
      },
    )
    .replace(
      /(<style[^>]*>)([\s\S]*?)(<\/style>)/gi,
      (_, open, cssContent, close) =>
        open + processCss(cssContent, slideSourceDir, ctx) + close,
    )
    .replace(
      /(<textarea[^>]*data-template[^>]*>)([\s\S]*?)(<\/textarea>)/gi,
      (_, open, mdContent, close) =>
        open + rewriteMarkdown(mdContent, slideSourceDir, ctx) + close,
    )
    .replace(/<link\b([^>]*\brel=["']icon["'][^>]*)>/gi, (tag) => {
      const m = tag.match(/\bhref=["']([^"']+)["']/);
      if (!m) return tag;
      const resolved = toAssetsSrc(m[1], slideSourceDir, ctx);
      return resolved ? tag.replace(m[1], resolved) : tag;
    })
    .replace(
      /\bparallaxBackgroundImage"?\s*:\s*"([^"]+)"/g,
      (match, src) => {
        const resolved = toAssetsSrc(src, slideSourceDir, ctx);
        return resolved ? match.replace(`"${src}"`, `"${resolved}"`) : match;
      },
    );
}

function processCss(css: string, slideSourceDir: string, ctx: Context): string {
  return css.replace(
    /url\(\s*(['"]?)([^'")]+)\1\s*\)/g,
    (match, quote, url) => {
      const resolved = toAssetsSrc(url, slideSourceDir, ctx);
      return resolved ? `url(${quote}${resolved}${quote})` : match;
    },
  );
}

export function processAssets(
  slideHtml: string,
  slideSourceDir: string,
  ctx: Context,
): string {
  return rewriteHtml(slideHtml, slideSourceDir, ctx);
}
