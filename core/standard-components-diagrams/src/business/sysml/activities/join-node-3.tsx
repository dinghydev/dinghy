import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JOIN_NODE_3 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;startArrow=open;endArrow=none;rounded=0;strokeWidth=3;startSize=12;',
  _width: 2,
  _height: 80,
}

export function JoinNode3(props: DiagramNodeProps) {
  return <Shape {...JOIN_NODE_3} {...props} />
}
