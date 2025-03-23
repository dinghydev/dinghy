import type { ReactElement } from 'react'
import type {
  IacNodeProps,
  Item,
  NodeTree,
  Props,
} from '@reactiac/base-components'
import { handleCategory } from './category-handler/index.js'
import type { HostContainer, Output } from '@reactiac/base-renderer'
import type { TfRenderOptions } from './types.js'

const resolveValue = (node: NodeTree, value: ReactElement): ReactElement => {
  if (typeof value === 'function') {
    return resolveValue(node, (value as any)(node))
  }
  if (Array.isArray(value)) {
    const array = value as any
    return array.map((v: any): Props => resolveValue(node, v) as any)
  }
  if (typeof value === 'object') {
    const object = value as any
    for (const key of Object.keys(object)) {
      object[key] = resolveValue(node, object[key])
    }
    return object
  }
  return value
}

const isStageMatch = (stage: Item, _stage = 'main'): boolean => {
  if (Array.isArray(_stage)) {
    return _stage.some((s) => isStageMatch(stage, s))
  }
  return stage?.name === _stage || _stage === '*'
}

const collectTfElements = (
  stage: Item,
  tfRoot: Props,
  _props: IacNodeProps,
) => {
  if (_props._inputSchema && isStageMatch(stage, (_props as any)._stage)) {
    handleCategory(tfRoot, _props._node!)
  }
  _props._node!._children.map((c: NodeTree) =>
    collectTfElements(stage, tfRoot, c._props),
  )
}

export const toTfJson = (
  container: HostContainer<string, TfRenderOptions>,
): Output<string> => {
  const tfRoot = {} as Props
  collectTfElements(
    container.renderOptions.stage as any,
    tfRoot,
    (container.rootElement as any).props._node._props as any,
  )
  container.result = JSON.stringify(tfRoot, null, 2)
  return container
}
