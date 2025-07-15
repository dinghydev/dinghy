import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11390_MOTOR = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11390;points=[[0.334,0,0],[0.334,1,0]]',
  _width: 83.38,
  _height: 92.9,
}

export function X11390Motor(props: DiagramNodeProps) {
  return <Shape {...X11390_MOTOR} {...props} />
}
