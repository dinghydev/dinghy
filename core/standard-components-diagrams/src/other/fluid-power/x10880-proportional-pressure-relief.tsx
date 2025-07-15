import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X10880_PROPORTIONAL_PRESSURE_RELIEF = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10880;points=[[0.267,0.15,0],[0.267,1,0],[0.6,1,0]]',
  _width: 139.14,
  _height: 88.42,
}

export function X10880ProportionalPressureRelief(props: DiagramNodeProps) {
  return <Shape {...X10880_PROPORTIONAL_PRESSURE_RELIEF} {...props} />
}
