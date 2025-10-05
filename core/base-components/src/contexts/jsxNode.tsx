import type { ReactNode } from 'react'
import type { NodeTree, ReactNodeTree } from '../types/index.ts'

type Attributes = {
  children?: ReactNode
  _node?: NodeTree
}

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      node: Attributes
    }
  }
}

export default function jsxRender({ _node, children }: ReactNodeTree) {
  return <node _node={_node}>{children}</node>
}
