import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHOICE_MERGE_NODE_DECISION_NODE = {
  _style: {
    entity: 'rhombus;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function ChoiceMergeNodeDecisionNode(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CHOICE_MERGE_NODE_DECISION_NODE)}
    />
  )
}
