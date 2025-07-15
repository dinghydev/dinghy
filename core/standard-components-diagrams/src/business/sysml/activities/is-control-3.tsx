import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IS_CONTROL_3 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;endArrow=open;rounded=0;verticalAlign=bottom;entryX=0;entryY=0.5;endSize=12;',
  _width: 2,
  _height: 60,
}

export function IsControl3(props: DiagramNodeProps) {
  return <Shape {...IS_CONTROL_3} {...props} />
}
