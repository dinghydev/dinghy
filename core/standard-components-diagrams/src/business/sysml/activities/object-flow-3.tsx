import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OBJECT_FLOW_3 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;endArrow=open;labelBackgroundColor=none;strokeWidth=2;endSize=12;',
  _width: 3,
  _height: 60,
}

export function ObjectFlow3(props: DiagramNodeProps) {
  return <Shape {...OBJECT_FLOW_3} {...props} />
}
