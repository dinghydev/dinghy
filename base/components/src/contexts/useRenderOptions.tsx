import type { Item, Stack } from '../types.ts'
import { useNodeContext } from './NodeContext.tsx'
import { getRootNode } from '../utils/nodeUtils.ts'

export function useRenderOptions() {
  const rootNode = getRootNode(useNodeContext())
  return rootNode._props as { stack?: Stack; stage?: Item }
}
