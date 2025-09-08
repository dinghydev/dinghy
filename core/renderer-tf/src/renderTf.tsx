import { toTfJson } from './toTfJson.ts'
import { renderNode } from '@dinghy/base-renderer'
import type { HostContainer } from '@dinghy/base-renderer'
import type { TfRenderOptions } from './types.ts'
import { RootNode } from '@dinghy/base-components'
import { applyProcessors } from './processors/index.ts'

export function renderTf(
  App: React.FunctionComponent,
  renderOptions: TfRenderOptions,
) {
  const container = {
    renderOptions,
    applyProcessors,
    callback: toTfJson,
  } as HostContainer<string, TfRenderOptions>

  return renderNode<string, TfRenderOptions>(
    container,
    <RootNode {...(renderOptions as any)}>
      <App />
    </RootNode>,
  )
}
