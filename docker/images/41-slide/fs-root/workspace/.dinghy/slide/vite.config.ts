import { defineConfig } from "vite";
import path from "node:path";
import slidesPlugin from "./vite-plugin-slides/index";
import { createContext } from "./vite-plugin-slides/config/context";

const ctx = createContext();

export default defineConfig({
  root: ctx.outputDevDir,
  base: ctx.globalConfig.baseUrl,
  appType: "mpa",
  server: {
    port: 3000,
    watch: {
      ignored: ["**/output/**"],
    },
  },
  preview: {
    port: 3000,
  },
  build: {
    outDir: path.resolve(
      "output",
      ctx.outputBuildDir,
    ),
    emptyOutDir: false,
  },
  plugins: [
    slidesPlugin(ctx),
  ],
});
