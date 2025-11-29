import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11070_CONTROL_COVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11070;points=[[0.13,1,0],[0.497,0.84,0]]',
  },
  _width: 355.5,
  _height: 115.12,
}

export function X11070ControlCover(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, X11070_CONTROL_COVER)} />
}
