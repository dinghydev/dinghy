import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10790_SERVO_VALVE_PILOT_OPERATED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10790;points=[[0.332,0.055,0],[0.416,0.055,0],[0.332,1,0],[0.416,1,0],[0,0.5,0],[0,0.625,0],[0,0.75,0]]',
  },
  _width: 251.14,
  _height: 93.04,
}

export function X10790ServoValvePilotOperated(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X10790_SERVO_VALVE_PILOT_OPERATED)}
    />
  )
}
