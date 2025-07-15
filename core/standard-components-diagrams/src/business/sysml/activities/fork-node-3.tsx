import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FORK_NODE_3 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;endArrow=open;rounded=0;strokeWidth=3;endSize=12;',
  _width: 2,
  _height: 80,
}

export function ForkNode3(props: DiagramNodeProps) {
  return <Shape {...FORK_NODE_3} {...props} />
}
