import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10820_SERVO_VALVE_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10820;points=[[0.143,0,0],[0.225,0,0],[0.143,1,0],[0.225,1,0]]',
  },
  _width: 227.56,
  _height: 75.02,
}

export function X10820ServoValveWith(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, X10820_SERVO_VALVE_WITH)} />
  )
}
