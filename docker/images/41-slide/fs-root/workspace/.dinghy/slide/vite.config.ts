import { defineConfig } from "vite";
import path from "node:path";
import slidesPlugin from "./vite-plugin-slides/index";

export default defineConfig({
  root: path.resolve(
    "output",
    process.env.DINGHY_SLIDE_OUTPUT_DEV_DIR ?? "slides-dev",
  ),
  base: process.env.DINGHY_SLIDE_BASE_URL ?? "/",
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
      process.env.DINGHY_SLIDE_OUTPUT_BUILD_DIR ?? "slides-build",
    ),
    emptyOutDir: false,
  },
  plugins: [
    slidesPlugin(),
  ],
});
