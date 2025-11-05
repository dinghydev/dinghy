import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11090_CONTROL_COVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11090;points=[[0.062,1,0],[0.187,1,0],[0.5,0.875,0],[0.814,1,0]]',
  },
  _width: 296.94,
  _height: 148.92,
}

export function X11090ControlCover(props: NodeProps) {
  return (
    <Shape
      {...X11090_CONTROL_COVER}
      {...props}
      _style={extendStyle(X11090_CONTROL_COVER, props)}
    />
  )
}
