import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X12020_FILTER_WITH = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12020;points=[[0.28,0.09,0],[0.28,1,0]]',
  _width: 93.86,
  _height: 99.22,
}

export function X12020FilterWith(props: DiagramNodeProps) {
  return <Shape {...X12020_FILTER_WITH} {...props} />
}
