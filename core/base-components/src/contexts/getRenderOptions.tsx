import { StackType } from '../cli-shared/types.ts'
import { useNodeContext } from '../contexts/NodeContext.tsx'
import type { NodeTree } from '../types/index.ts'

export type RenderOptions = {
  stacks: Record<string, StackType>
  stack: StackType
  apps: Record<string, string>
  files: Record<string, any>
} & Record<string, unknown>

export function getRenderOptions() {
  const rootNode = getRootNode()
  return rootNode._props as RenderOptions
}

export const getRootNode = (node?: NodeTree): NodeTree => {
  if (!node) {
    node = useNodeContext()
  }
  return node._parent ? getRootNode(node._parent) : node
}
