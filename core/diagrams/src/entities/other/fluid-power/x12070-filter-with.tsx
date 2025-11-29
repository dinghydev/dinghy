import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X12070_FILTER_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12070;points=[[0.225,0,0],[0.225,1,0]]',
  },
  _width: 116.84,
  _height: 128.54,
}

export function X12070FilterWith(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, X12070_FILTER_WITH)} />
}
