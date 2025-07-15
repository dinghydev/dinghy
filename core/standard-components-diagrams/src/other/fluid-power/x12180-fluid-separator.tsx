import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X12180_FLUID_SEPARATOR = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12180;points=[[0,0.33,0],[1,0.33,0],[0.5,1,0]]',
  _width: 90.42,
  _height: 78.68,
}

export function X12180FluidSeparator(props: DiagramNodeProps) {
  return <Shape {...X12180_FLUID_SEPARATOR} {...props} />
}
