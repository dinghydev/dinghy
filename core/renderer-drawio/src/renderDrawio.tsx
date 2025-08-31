import { toDrawioXml } from './toDrawioXml.ts'
import type { HostContainer } from '@diac/base-renderer'
import { applyProcessors } from './processors/index.ts'
import type { DrawioRenderOptions } from './types.ts'
import { RootNode } from '@diac/base-components'
import { renderNode } from '@diac/base-renderer'

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
