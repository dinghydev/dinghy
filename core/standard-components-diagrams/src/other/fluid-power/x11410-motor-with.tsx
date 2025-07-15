import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11410_MOTOR_WITH = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11410;points=[[0.387,0,0],[0.387,1,0]]',
  _width: 105.9,
  _height: 92.9,
}

export function X11410MotorWith(props: DiagramNodeProps) {
  return <Shape {...X11410_MOTOR_WITH} {...props} />
}
