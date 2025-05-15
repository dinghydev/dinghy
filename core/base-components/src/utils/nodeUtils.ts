import type { NodeTree } from '../types.ts'

export const getRootNode = (node: NodeTree): NodeTree =>
  node._parent ? getRootNode(node._parent) : node
