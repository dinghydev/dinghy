import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X12390_SINGLE_STAGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12390;points=[[0,0.18,0],[1,0.18,0],[0.5,1,0]]',
  },
  _width: 112.26,
  _height: 102.36,
}

export function X12390SingleStage(props: NodeProps) {
  return (
    <Shape
      {...X12390_SINGLE_STAGE}
      {...props}
      _style={extendStyle(X12390_SINGLE_STAGE, props)}
    />
  )
}
