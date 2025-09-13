import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X12420_SUCTION_CUP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12420;points=[[0.5,0,0],[0,1,0],[1,1,0]]',
  },
  _width: 37.38,
  _height: 56.78,
}

export function X12420SuctionCup(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12420_SUCTION_CUP}
      {...props}
      _style={extendStyle(X12420_SUCTION_CUP, props)}
    />
  )
}
