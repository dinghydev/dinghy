import path from "node:path";
import type { Plugin } from "vite";
import type { NormalizedOutputOptions } from "rollup";
import { ROOT } from "./config/constants";
import { type Context, createContext } from "./config/context";
import { generateSlides } from "./generators/generateSlides";
import { collectMPAInputs } from "./build/collectMPAInputs";
import { handleWriteBundle } from "./build/writeBundle";

export { generateSlides } from "./generators/generateSlides";

const PLUGIN_CSS = path.join(ROOT, "vite-plugin-slides/templates/slide.css");

export default function slidesPlugin(ctx: Context): Plugin {
  return {
    name: "vite-plugin-slides",

    config(_, { command }) {
      if (command === "build") {
        generateSlides(ctx);
        return {
          build: {
            assetsInlineLimit: ctx.globalConfig.inlineAssets
              ? Infinity
              : undefined,
            rollupOptions: { input: collectMPAInputs(ctx) },
          },
        };
      }
    },

    configureServer(server) {
      generateSlides(ctx);
      server.watcher.add(ctx.slidesYmlFile);
      server.watcher.add(ctx.slidesDir);
      server.watcher.add(PLUGIN_CSS);
      const onChange = (file: string) => {
        if (
          file === ctx.slidesYmlFile ||
          file === PLUGIN_CSS ||
          file.startsWith(ctx.slidesDir + path.sep)
        ) {
          ctx = createContext();
          generateSlides(ctx);
          server.ws.send({ type: "full-reload" });
        }
      };
      server.watcher.on("change", onChange);
      server.watcher.on("add", onChange);
    },

    writeBundle(options: NormalizedOutputOptions) {
      handleWriteBundle(options.dir!, ctx);
    },
  };
}
