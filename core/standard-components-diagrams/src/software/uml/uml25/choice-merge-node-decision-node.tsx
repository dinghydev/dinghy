import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHOICE_MERGE_NODE_DECISION_NODE = {
  _style: 'rhombus;',
  _width: 30,
  _height: 30,
}

export function ChoiceMergeNodeDecisionNode(props: DiagramNodeProps) {
  return <Shape {...CHOICE_MERGE_NODE_DECISION_NODE} {...props} />
}
