import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11950_TIME_CONTROLLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11950;points=[[0,0,0],[0.5,0,0],[1,0,0],[1,0.5,0],[1,1,0],[0.5,1,0],[0,1,0],[0,0.5,0]]',
  },
  _width: 46.22,
  _height: 27.82,
}

export function X11950TimeController(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, X11950_TIME_CONTROLLER)} />
  )
}
