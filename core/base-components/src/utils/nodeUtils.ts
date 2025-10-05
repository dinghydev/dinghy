import type { NodeTree } from '../types/index.ts'

export const getRootNode = (node: NodeTree): NodeTree =>
  node._parent ? getRootNode(node._parent) : node
