import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11410_MOTOR_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11410;points=[[0.387,0,0],[0.387,1,0]]',
  },
  _width: 105.9,
  _height: 92.9,
}

export function X11410MotorWith(props: NodeProps) {
  return (
    <Shape
      {...X11410_MOTOR_WITH}
      {...props}
      _style={extendStyle(X11410_MOTOR_WITH, props)}
    />
  )
}
