import type { ReactElement } from 'react'
import {
  deepResolve,
  type IacNodeProps,
  type Item,
  type NodeTree,
  type Props,
} from '@reactiac/base-components'
import { handleCategory } from './category-handler/index.ts'
import type { HostContainer, Output } from '@reactiac/base-renderer'
import type { TfRenderOptions } from './types.ts'

const isStageMatch = (stage: Item, currentStage?: any): boolean => {
  const stageName = currentStage || 'main'
  if (Array.isArray(stageName)) {
    return stageName.some((s) => isStageMatch(stage, s))
  }
  if (stageName.startsWith('!')) {
    return stage?.name === stageName.slice(1)
  }
  return stage?.name === stageName
}

const collectTfElements = (
  renderOptions: TfRenderOptions,
  tfRoot: Props,
  _props: IacNodeProps,
) => {
  if (
    _props._inputSchema &&
    (_props._stackResource ||
      isStageMatch(renderOptions.stage, (_props as any)._stage))
  ) {
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
  container.result = JSON.stringify(tfRoot, null, 2)
  container.model = tfRoot
  return container
}
