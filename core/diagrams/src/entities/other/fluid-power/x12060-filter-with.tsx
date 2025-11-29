import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X12060_FILTER_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12060;points=[[0.34,0,0],[0.34,1,0]]',
  },
  _width: 246.26,
  _height: 147,
}

export function X12060FilterWith(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, X12060_FILTER_WITH)} />
}
