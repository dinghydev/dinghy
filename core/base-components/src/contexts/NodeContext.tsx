import { createContext, type ReactElement, useContext } from 'react'
import type { NodeProps, NodeTree, Props } from '../types.ts'

export const NodeContext = createContext<NodeTree>({} as any)

export const useNodeContext = (): NodeTree => useContext(NodeContext)

export const useNode = (_props: NodeProps): NodeTree => {
  const _parent = useNodeContext()
  const child = {
    _parent,
    _children: [],
    _props: {
      _level: (_parent._props._level as number) + 1,
      _version: _parent._props._version,
      _view: _parent._props._view,
      _stage: _parent._props._stage,
      ..._props,
    },
  } as Props as NodeTree

  _parent._children.push(child)
  child._props._node = child
  return child
}

export function RootNode({ children, ...props }: Props & ReactElement) {
  const _props = {
    _id: 'root',
    _level: 0,
    ...props,
  } as any

  const root = {
    _children: [],
    _props,
  } as NodeTree
  _props._node = root
  return (
    <NodeContext.Provider value={root}>{children as any}</NodeContext.Provider>
  )
}
