import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X12080_FILTER_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12080;points=[[0.167,0,0],[0.167,1,0]]',
  },
  _width: 156.32,
  _height: 128.54,
}

export function X12080FilterWith(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, X12080_FILTER_WITH)} />
}
