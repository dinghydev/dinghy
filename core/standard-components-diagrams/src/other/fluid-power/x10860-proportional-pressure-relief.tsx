import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X10860_PROPORTIONAL_PRESSURE_RELIEF = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10860;points=[[0.23,0,0],[0.23,1,0],[0.515,1,0]]',
  _width: 162.34,
  _height: 75,
}

export function X10860ProportionalPressureRelief(props: DiagramNodeProps) {
  return <Shape {...X10860_PROPORTIONAL_PRESSURE_RELIEF} {...props} />
}
