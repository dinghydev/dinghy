import type { IacNodeProps, NodeTree } from '../types.js'
import Shape from './Shape.js'
import { useTypedNode } from '../contexts/useTypedNode.js'
import { useRenderOptions } from '../contexts/useRenderOptions.js'
import { camelCaseToWords } from '../utils/words.js'

export default function Stack(props: IacNodeProps) {
  const { stack, stage } = useRenderOptions()
  let appendEnvToTitle = {}
  if (stack?.env) {
    const _title = (node: NodeTree) => {
      let title =
        stack?.title ||
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
    _stage: stage,
    ...props,
    ...appendEnvToTitle,
  }
  return <Shape {...stackProps} />
}

export const useStack = () => useTypedNode<IacNodeProps>(Stack)
