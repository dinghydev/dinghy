import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X10580_PRESSURE_RELIEF = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10580;points=[[0,0.355,0],[1,0.355,0],[0.5,1,0]]',
  _width: 260.94,
  _height: 143.86,
}

export function X10580PressureRelief(props: DiagramNodeProps) {
  return <Shape {...X10580_PRESSURE_RELIEF} {...props} />
}
