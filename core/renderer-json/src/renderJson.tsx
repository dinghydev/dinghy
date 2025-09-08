import { toNodeJson } from './toNodeJson.ts'
import { type HostContainer, renderNode } from '@dinghy/base-renderer'
import type { JsonRenderOptions } from './types.ts'
import { RootNode } from '@dinghy/base-components'

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
