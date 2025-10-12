import { useNodeContext } from './NodeContext.tsx'
import { getRootNode } from '../utils/nodeUtils.ts'
import type { StackType } from '../cli-shared/types.ts'

export function useRenderOptions() {
  const rootNode = getRootNode(useNodeContext())
  return { renderOptions: rootNode._props as any }
}

export function useRenderOptionsStack() {
  const options = useRenderOptions().renderOptions
  return {
    stack: options.stack as StackType,
    stacks: Object.values(options.stacks) as StackType[],
  }
}
