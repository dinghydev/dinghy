import { toDrawioXml } from './toDrawioXml.ts'
import type { HostContainer } from '@dinghy/base-renderer'
import { applyProcessors } from './processors/index.ts'
import type { DrawioRenderOptions } from './types.ts'
import { RootNode } from '@dinghy/base-components'
import { renderNode } from '@dinghy/base-renderer'

export function renderDrawio(
  App: React.FunctionComponent,
  renderOptions: DrawioRenderOptions = {},
) {
  const container = {
    renderOptions,
    applyProcessors,
    callback: toDrawioXml,
  } as HostContainer<string, DrawioRenderOptions>

  return renderNode<string, DrawioRenderOptions>(
    container,
    <RootNode {...(renderOptions as any)}>
      <App />
    </RootNode>,
  )
}
