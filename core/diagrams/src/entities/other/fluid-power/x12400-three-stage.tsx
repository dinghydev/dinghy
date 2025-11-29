import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X12400_THREE_STAGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12400;points=[[0,0.195,0],[1,0.195,0],[0.25,1,0]]',
  },
  _width: 149.6,
  _height: 93.58,
}

export function X12400ThreeStage(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, X12400_THREE_STAGE)} />
}
