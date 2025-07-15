import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X12160_AIR_CONDITIONING_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12160_simplified;points=[[0,0.5,0],[1,0.5,0]]',
  _width: 130.68,
  _height: 55.78,
}

export function X12160AirConditioning2(props: DiagramNodeProps) {
  return <Shape {...X12160_AIR_CONDITIONING_2} {...props} />
}
