import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10820_SERVO_VALVE_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10820;points=[[0.143,0,0],[0.225,0,0],[0.143,1,0],[0.225,1,0]]',
  },
  _original_width: 227.56,
  _original_height: 75.02,
}

export function X10820ServoValveWith(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10820_SERVO_VALVE_WITH}
      {...props}
      _style={extendStyle(X10820_SERVO_VALVE_WITH, props)}
    />
  )
}
