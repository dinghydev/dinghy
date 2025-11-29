import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11120_CONTROL_COVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11120;points=[[0.062,1,0],[0.187,1,0],[0.5,0.86,0],[0.94,1,0]]',
  },
  _width: 296.94,
  _height: 130.8,
}

export function X11120ControlCover(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, X11120_CONTROL_COVER)} />
}
