import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11900_FLOW_INDICATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11900;points=[[0.5,1,0]]',
  },
  _width: 37.34,
  _height: 56.18,
}

export function X11900FlowIndicator(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, X11900_FLOW_INDICATOR)} />
}
