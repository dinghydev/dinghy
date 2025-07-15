import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X12030_FILTER_WITH = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12030;points=[[0.62,0,0],[0.62,1,0]]',
  _width: 97.4,
  _height: 126.02,
}

export function X12030FilterWith(props: DiagramNodeProps) {
  return <Shape {...X12030_FILTER_WITH} {...props} />
}
