import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHOICE_MERGE_NODE_DECISION_NODE = {
  _style: {
    entity: 'rhombus;',
  },
  _width: 30,
  _height: 30,
}

export function ChoiceMergeNodeDecisionNode(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHOICE_MERGE_NODE_DECISION_NODE}
      {...props}
      _style={extendStyle(CHOICE_MERGE_NODE_DECISION_NODE, props)}
    />
  )
}
