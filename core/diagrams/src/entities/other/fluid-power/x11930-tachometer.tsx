import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11930_TACHOMETER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11930;points=[[0,0.375,0],[0,0.625,0]]',
  },
  _width: 56.28,
  _height: 37.42,
}

export function X11930Tachometer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, X11930_TACHOMETER)} />
}
