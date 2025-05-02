import { useNodeContext } from './NodeContext.tsx'
import { getRootNode } from '../utils/nodeUtils.ts'
import type { Stack } from '../utils/stackUtils.ts'

export function useRenderOptions() {
  const rootNode = getRootNode(useNodeContext())
  return { renderOptions: rootNode._props as any }
}

export function useRenderOptionsStack() {
  const options = useRenderOptions().renderOptions
  return {
    stack: options.stack as Stack,
    stacks: Object.values(options.stacks) as Stack[],
  }
}
