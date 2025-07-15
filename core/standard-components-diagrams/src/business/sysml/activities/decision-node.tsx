import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DECISION_NODE = {
  _style:
    'shape=rhombus;html=1;verticalLabelPosition=bottom;verticalAlignment=top;',
  _width: 200,
  _height: 80,
}

export function DecisionNode(props: DiagramNodeProps) {
  return <Shape {...DECISION_NODE} {...props} />
}
