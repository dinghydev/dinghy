import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DECISION_NODE_2 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;align=right;verticalAlign=bottom;endArrow=none;rounded=0;labelBackgroundColor=none;startArrow=open;startSize=12;',
  _width: 1,
  _height: 80,
}

export function DecisionNode2(props: DiagramNodeProps) {
  return <Shape {...DECISION_NODE_2} {...props} />
}
