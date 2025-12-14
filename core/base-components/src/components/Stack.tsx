import type { NodeProps } from '../types/index.ts'
import { Shape } from './Shape.tsx'
import { useTypedNode } from '../contexts/useTypedNode.tsx'
import { useRenderOptions } from '../contexts/useRenderOptions.tsx'

export function Stack(props: NodeProps) {
  const { renderOptions } = useRenderOptions()
  if ((props as any).onRender) {
    ;(props as any).onRender(renderOptions)
  }
  const { stack, stage } = renderOptions

  const stackProps = {
    ...stack,
    stage: stage,
    ...props,
  }
  return <Shape {...(stackProps as any)} />
}

export const useStack = () => useTypedNode<NodeProps>(Stack)
