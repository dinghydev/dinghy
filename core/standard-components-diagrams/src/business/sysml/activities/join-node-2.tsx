import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JOIN_NODE_2 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;rounded=0;endArrow=open;strokeWidth=3;endSize=12;',
  _width: 1,
  _height: 80,
}

export function JoinNode2(props: DiagramNodeProps) {
  return <Shape {...JOIN_NODE_2} {...props} />
}
