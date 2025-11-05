import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X12190_FILTER_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12190;points=[[0,0.33,0],[1,0.33,0],[0.5,1,0]]',
  },
  _original_width: 90.42,
  _original_height: 78.68,
}

export function X12190FilterWith(props: NodeProps) {
  return (
    <Shape
      {...X12190_FILTER_WITH}
      {...props}
      _style={extendStyle(X12190_FILTER_WITH, props)}
    />
  )
}
