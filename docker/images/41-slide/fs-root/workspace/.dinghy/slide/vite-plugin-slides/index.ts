import path from "node:path";
import type { Plugin } from "vite";
import type { NormalizedOutputOptions } from "rollup";
import { ROOT, SLIDES_DIR, SLIDES_YML } from "./config/constants";
import { generateSlides } from "./generators/generateSlides";
import { collectMPAInputs } from "./build/collectMPAInputs";
import { handleWriteBundle } from "./build/writeBundle";

export { generateSlides } from "./generators/generateSlides";

const PLUGIN_CSS = path.join(ROOT, "vite-plugin-slides/templates/slide.css");

export default function slidesPlugin(): Plugin {
  let inlineAssets = true;

  return {
    name: "vite-plugin-slides",

    config(_, { command }) {
      if (command === "build") {
        ({ inlineAssets } = generateSlides(true));
        return {
          build: {
            assetsInlineLimit: inlineAssets ? Infinity : undefined,
            rollupOptions: { input: collectMPAInputs() },
          },
        };
      }
    },

    configureServer(server) {
      generateSlides();
      server.watcher.add(SLIDES_YML);
      server.watcher.add(SLIDES_DIR);
      server.watcher.add(PLUGIN_CSS);
      const onChange = (file: string) => {
        if (
          file === SLIDES_YML ||
          file === PLUGIN_CSS ||
          file.startsWith(SLIDES_DIR + path.sep)
        ) {
          generateSlides();
          server.ws.send({ type: "full-reload" });
        }
      };
      server.watcher.on("change", onChange);
      server.watcher.on("add", onChange);
    },

    writeBundle(options: NormalizedOutputOptions) {
      handleWriteBundle(options.dir!, inlineAssets);
    },
  };
}
