import type { IacNodeProps, NodeTree } from '../types.ts'
import { Shape } from './Shape.tsx'
import { useTypedNode } from '../contexts/useTypedNode.tsx'
import { useRenderOptions } from '../contexts/useRenderOptions.tsx'
import { camelCaseToWords } from '../utils/words.ts'

export function Stack(props: IacNodeProps) {
  const { renderOptions } = useRenderOptions()
  if ((props as any).onRender) {
    ;(props as any).onRender(renderOptions)
  }
  const { stack, stage } = renderOptions
  let appendEnvToTitle = {}
  if (stack?.env) {
    const _title = (node: NodeTree) => {
      let title = stack?.title ||
        props._title ||
        props.title ||
        camelCaseToWords((node._props._tags as any)[1])
      if (typeof title === 'function') {
        title = (title as any)(node)
      }
      return `${title}: ${stack.env}`
    }
    appendEnvToTitle = {
      title: _title,
      _title,
    }
  }

  const stackProps = {
    ...stack,
    stage: stage,
    ...props,
    ...appendEnvToTitle,
  }
  return <Shape {...(stackProps as any)} />
}

export const useStack = () => useTypedNode<IacNodeProps>(Stack)
