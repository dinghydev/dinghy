import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X10840_PROPORTIONAL_PRESSURE_RELIEF = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10840;points=[[0.335,0,0],[0.335,1,0]]',
  _width: 111.48,
  _height: 74.82,
}

export function X10840ProportionalPressureRelief(props: DiagramNodeProps) {
  return <Shape {...X10840_PROPORTIONAL_PRESSURE_RELIEF} {...props} />
}
