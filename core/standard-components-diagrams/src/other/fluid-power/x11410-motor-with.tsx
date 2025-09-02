import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11410_MOTOR_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11410;points=[[0.387,0,0],[0.387,1,0]]',
  },
  _original_width: 105.9,
  _original_height: 92.9,
}

export function X11410MotorWith(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11410_MOTOR_WITH}
      {...props}
      _style={extendStyle(X11410_MOTOR_WITH, props)}
    />
  )
}
