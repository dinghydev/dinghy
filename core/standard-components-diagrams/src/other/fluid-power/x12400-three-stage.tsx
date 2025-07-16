import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X12400_THREE_STAGE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12400;points=[[0,0.195,0],[1,0.195,0],[0.25,1,0]]',
  _width: 149.6,
  _height: 93.58,
}

export function X12400ThreeStage(props: DiagramNodeProps) {
  return <Shape {...X12400_THREE_STAGE} {...props} />
}
