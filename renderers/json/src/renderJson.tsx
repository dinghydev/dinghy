// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { toNodeJson } from "./toNodeJson.ts";
import { type HostContainer, renderNode } from "@reactiac/base-renderer";
import type { JsonRenderOptions } from "./types.ts";
import { RootNode } from "@reactiac/base-components";

export function renderJson(
  App: React.FunctionComponent,
  renderOptions: JsonRenderOptions = {},
) {
  console.log("renderJsonxx", App, renderOptions);
  const container = {
    renderOptions,
    callback: toNodeJson,
  } as HostContainer<string, JsonRenderOptions>;

  return renderNode<string, JsonRenderOptions>(
    container,
    <RootNode {...(renderOptions as any)}>
      <App />
    </RootNode>,
  );
}
