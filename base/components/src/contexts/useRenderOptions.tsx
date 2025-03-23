import type { Item, Stack } from '../types.js'
import { useNodeContext } from './NodeContext.js'
import { getRootNode } from '../utils/nodeUtils.js'

export function useRenderOptions() {
  const rootNode = getRootNode(useNodeContext())
  return rootNode._props as { stack?: Stack; stage?: Item }
}
