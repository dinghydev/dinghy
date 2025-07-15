import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X12380_VACUUM_GENERATOR = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12380;points=[[0,0.335,0],[1,0.335,0],[0.5,1,0]]',
  _width: 112.26,
  _height: 55.92,
}

export function X12380VacuumGenerator(props: DiagramNodeProps) {
  return <Shape {...X12380_VACUUM_GENERATOR} {...props} />
}
