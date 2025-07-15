import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTROL_FLOW_2 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;endArrow=open;labelBackgroundColor=none;endSize=12;',
  _width: 2,
  _height: 60,
}

export function ControlFlow2(props: DiagramNodeProps) {
  return <Shape {...CONTROL_FLOW_2} {...props} />
}
