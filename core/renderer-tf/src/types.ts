import type { ReactElement } from 'react'
import type {
  NodeProps,
  NodeTree,
  Props,
  StackType,
} from '@dinghy/base-components'

export type TfRenderOptions = {
  tf: {
    generateImport?: boolean
    provider?: 'terraform' | 'opentofu'
  }
  stack: StackType
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
