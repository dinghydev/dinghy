import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X12040_FILTER_WITH = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12040;points=[[0.68,0,0],[0.68,1,0]]',
  _width: 122.92,
  _height: 147,
}

export function X12040FilterWith(props: DiagramNodeProps) {
  return <Shape {...X12040_FILTER_WITH} {...props} />
}
