// biome-ignore lint/style/useImportType: <explanation>
import React from 'react'
import { toNodeJson } from './toNodeJson.js'
import { renderNode, type HostContainer } from '@reactiac/base-renderer'
import type { JsonRenderOptions } from './types.js'
import { RootNode } from '@reactiac/base-components'

export function renderJson(
  App: React.FunctionComponent,
  renderOptions: JsonRenderOptions = {},
) {
  const container = {
    renderOptions,
    callback: toNodeJson,
  } as HostContainer<string, JsonRenderOptions>

  return renderNode<string, JsonRenderOptions>(
    container,
    <RootNode {...(renderOptions as any)}>
      <App />
    </RootNode>,
  )
}
