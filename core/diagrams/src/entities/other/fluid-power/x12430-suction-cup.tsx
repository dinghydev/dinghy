import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X12430_SUCTION_CUP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12430;points=[[0.5,0,0],[0,1,0],[1,1,0]]',
  },
  _width: 37.38,
  _height: 56.78,
}

export function X12430SuctionCup(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, X12430_SUCTION_CUP)} />
}
