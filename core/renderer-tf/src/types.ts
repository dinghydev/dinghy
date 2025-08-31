import type { ReactElement } from 'react'
import type {
  Item,
  NodeProps,
  NodeTree,
  Props,
  StackType,
} from '@diac/base-components'

export type TfRenderOptions = {
  tf: {
    generateImport?: boolean
    provider?: 'terraform' | 'opentofu'
  }
  stack: StackType
  stage: Item
}

export type ElementProps = {
  style: Props
} & Props

export type TfNodeTree = {
  _parent: TfNodeTree
  _children: TfNodeTree[]
  _props: NodeProps

  _dependsOn?: TfNodeTree[]
  _dependsBy?: TfNodeTree[]
} & NodeTree

export type TfContext = {
  renderOptions: TfRenderOptions
  rootNode: TfNodeTree
  rootElement: ReactElement
}

export type Processor = (context: TfContext) => void
