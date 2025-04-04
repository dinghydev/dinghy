import { type JsonRenderOptions, renderJson } from "@reactiac/renderer-json";
import { App } from "../project/app/App.tsx";

if (import.meta.main) {
    console.log("App", App);
    const result = await renderJson(App);
    console.log("result", result);
}
