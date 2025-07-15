import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X10800_SERVO_VALVE_PILOT_OPERATED = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10800;points=[[0.332,0.055,0],[0.416,0.055,0],[0.332,1,0],[0.416,1,0],[0,0.5,0],[0,0.625,0],[0,0.75,0]]',
  _width: 223.02,
  _height: 74.42,
}

export function X10800ServoValvePilotOperated(props: DiagramNodeProps) {
  return <Shape {...X10800_SERVO_VALVE_PILOT_OPERATED} {...props} />
}
