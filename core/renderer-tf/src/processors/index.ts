import type { ReactElement } from 'react'
import type {
  Processor,
  TfContext,
  TfNodeTree,
  TfRenderOptions,
} from '../types.ts'
import { p10ResolveCategory } from './p10ResolveCategory.tsx'
import type { HostContainer } from '@dinghy/base-renderer'

const processors: Processor[] = [p10ResolveCategory]

export async function applyProcessors(
  container: HostContainer<string, TfRenderOptions>,
) {
  const { rootElement } = container
  const rootNode = (rootElement!.props as any)._node as TfNodeTree
  const context: TfContext = {
    rootNode,
    renderOptions: container.renderOptions,
    rootElement: rootElement as ReactElement,
  }
  for (const processor of processors) {
    await processor(context)
  }
  return context.rootElement
}
