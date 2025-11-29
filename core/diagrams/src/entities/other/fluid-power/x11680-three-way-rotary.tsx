import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11680_THREE_WAY_ROTARY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11680;points=[[0,0.27,0],[0,0.64,0],[0,1,0],[1,0.27,0],[1,0.64,0],[1,1,0]]',
  },
  _width: 93.66,
  _height: 50.86,
}

export function X11680ThreeWayRotary(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, X11680_THREE_WAY_ROTARY)} />
  )
}
