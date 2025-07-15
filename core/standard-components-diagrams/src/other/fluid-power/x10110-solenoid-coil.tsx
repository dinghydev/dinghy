import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X10110_SOLENOID_COIL = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10110;points=[[0,0,0],[0,0.5,0],[0,1,0],[1,0,0],[1,0.5,0],[1,1,0],[0.5,0,0],[0.5,1,0]]',
  _width: 27.88,
  _height: 18.66,
}

export function X10110SolenoidCoil(props: DiagramNodeProps) {
  return <Shape {...X10110_SOLENOID_COIL} {...props} />
}
