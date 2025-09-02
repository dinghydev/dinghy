import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10790_SERVO_VALVE_PILOT_OPERATED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10790;points=[[0.332,0.055,0],[0.416,0.055,0],[0.332,1,0],[0.416,1,0],[0,0.5,0],[0,0.625,0],[0,0.75,0]]',
  },
  _original_width: 251.14,
  _original_height: 93.04,
}

export function X10790ServoValvePilotOperated(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10790_SERVO_VALVE_PILOT_OPERATED}
      {...props}
      _style={extendStyle(X10790_SERVO_VALVE_PILOT_OPERATED, props)}
    />
  )
}
