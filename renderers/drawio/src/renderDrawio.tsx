import type { ReactNode } from 'react'
import { toDrawioXml } from './toDrawioXml.js'
import type { HostContainer } from '@reactiac/base-renderer'
import { applyProcessors } from './processors/index.js'
import type { DrawioRenderOptions } from './types.js'
import { RootNode } from '@reactiac/base-components'
import { renderNode } from '@reactiac/base-renderer'

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
    <RootNode {...renderOptions as any}>
      <App />
    </RootNode>,
  )
}
