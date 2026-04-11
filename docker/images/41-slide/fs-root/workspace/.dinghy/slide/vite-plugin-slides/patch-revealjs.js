/**
 * Patches reveal.js to support data URIs for video elements.
 *
 * Two fixes:
 * 1. data-background-video: the original code splits on "," which destroys
 *    base64 data URIs. Patched to treat data URIs as a single source and
 *    extract the MIME type from the URI instead of guessing from extension.
 * 2. data-preview-video: the original code sets video.src directly, giving
 *    the browser no MIME type hint. Patched to use a <source> element with
 *    the type extracted from the data URI.
 *
 * Run: node vite-plugin-slides/patch-revealjs.js
 * Hook into postinstall: "postinstall": "node vite-plugin-slides/patch-revealjs.js"
 */

import fs from "node:fs";
import path from "node:path";

const REVEAL_DIR = path.resolve("node_modules/reveal.js");
const PATCHED_MARKER = "data:([^;,]+)";

function patch(filePath, patches) {
  const rel = path.relative(process.cwd(), filePath);
  if (!fs.existsSync(filePath)) {
    throw new Error(`${rel} not found`);
  }
  let content = fs.readFileSync(filePath, "utf-8");
  if (content.includes(PATCHED_MARKER)) {
    throw new Error(`${rel} already patched`);
  }
  for (const { name, find, replace } of patches) {
    if (!find.test(content)) {
      throw new Error(`${rel} — pattern not found: ${name}`);
    }
    content = content.replace(find, replace);
  }
  fs.writeFileSync(filePath, content);
  console.log(`  DONE  ${rel} (${patches.length} patches)`);
}

// ---------------------------------------------------------------------------
// Patches for dist/reveal.mjs — the only bundle Vite loads.
// Uses regex with \s* to tolerate formatting changes across versions,
// and captures variable names dynamically to survive minifier renames.
// ---------------------------------------------------------------------------

// background-video: <v>.split(",").forEach( (<s>) => { ... createElement("source") ... setAttribute("src", <s>) ... <fn>(<s>) }
const distBackgroundVideo = {
  name: "background-video data URI",
  find: new RegExp(
    [
      /((\w+)\.split\(","\)\.forEach\(\s*\(?\s*(\w+)\s*\)?\s*=>\s*\{\s*)/.source,
      /(const\s+(\w+)\s*=\s*document\.createElement\("source"\)\s*;\s*)/.source,
      /(\5\.setAttribute\("src"\s*,\s*\3\)\s*;\s*)/.source,
      /(let\s+(\w+)\s*=\s*(\w+)\(\s*\3\s*\))/.source,
    ].join(""),
  ),
  replace: (_m, _head, v, s, _create, el, _setAttr, _typeStmt, t, fn) =>
    `(/^data:/.test(${v}.trim())?[${v}.trim()]:${v}.split(",")).forEach(${s}=>{` +
    `const ${el}=document.createElement("source");` +
    `${el}.setAttribute("src",${s}.trim());` +
    `let ${t}=/^data:([^;,]+)/.test(${s}.trim())?RegExp.$1:${fn}(${s})`,
};

// preview-video: .playsInline = !0, <v>.src = <u>, <c>.appendChild(<v>)
const distPreviewVideo = {
  name: "preview-video data URI",
  find: /\.playsInline\s*=\s*!0\s*,\s*(\w+)\.src\s*=\s*(\w+)\s*,\s*(\w+)\.appendChild\(\s*\1\s*\)/,
  replace: (_, v, u, c) =>
    `.playsInline=!0;if(/^data:([^;,]+)/.test(${u}.trim())){` +
    `const _src=document.createElement("source");_src.src=${u};_src.type=RegExp.$1;${v}.appendChild(_src)}` +
    `else{${v}.src=${u}}${c}.appendChild(${v})`,
};

// ---------------------------------------------------------------------------
// Apply
// ---------------------------------------------------------------------------

console.log("Patching reveal.js for data URI video support...\n");

patch(path.join(REVEAL_DIR, "dist/reveal.mjs"), [
  distBackgroundVideo,
  distPreviewVideo,
]);

console.log("\nDone.");
