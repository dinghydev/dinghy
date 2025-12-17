import {
  type NodeProps,
  type NodeTree,
  type Props,
} from '@dinghy/base-components'
import { handleCategory } from './handleCategory.ts'
import type { HostContainer, Output } from '@dinghy/base-renderer'
import type { TfRenderOptions } from './types.ts'

const collectTfElements = (
  renderOptions: TfRenderOptions,
  tfRoot: Props,
  _props: NodeProps,
) => {
  if (_props._category) {
    handleCategory(renderOptions, tfRoot, _props._node!)
  }
  _props._node!._children.map((c: NodeTree) =>
    collectTfElements(renderOptions, tfRoot, c._props)
  )
}

export const toTfJson = (
  container: HostContainer<string, TfRenderOptions>,
): Output<string> => {
  const tfRoot = {} as Props
  collectTfElements(
    container.renderOptions as any,
    tfRoot,
    (container.rootElement as any).props._node._props as any,
  )
  container.result = JSON.stringify(tfRoot, null, 2) + '\n'
  container.model = tfRoot
  return container
}
