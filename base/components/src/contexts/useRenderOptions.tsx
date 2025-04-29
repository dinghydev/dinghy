import { useNodeContext } from './NodeContext.tsx'
import { getRootNode } from '../utils/nodeUtils.ts'

export function useRenderOptions() {
  const rootNode = getRootNode(useNodeContext())
  return { renderOptions: rootNode._props as any }
}
