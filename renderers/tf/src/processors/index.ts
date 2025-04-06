import type { ReactElement } from 'react'
import type {
  Processor,
  TfContext,
  TfNodeTree,
  TfRenderOptions,
} from '../types.ts'
import { p10ResolveCategory } from './p10ResolveCategory.tsx'
import type { HostContainer } from '@reactiac/base-renderer'

const processors: Processor[] = [p10ResolveCategory]

export function applyProcessors(
  container: HostContainer<string, TfRenderOptions>,
) {
  const { rootElement } = container
  const rootNode = (rootElement!.props as any)._node as TfNodeTree
  const context: TfContext = {
    rootNode,
    renderOptions: container.renderOptions,
    rootElement: rootElement as ReactElement,
  }
  processors.map((processor) => processor(context))
  return context.rootElement
}
