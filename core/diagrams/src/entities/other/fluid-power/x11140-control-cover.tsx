import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11140_CONTROL_COVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11140;points=[[0.062,1,0],[0.187,1,0],[0.5,0.88,0],[0.94,1,0]]',
  },
  _width: 296.94,
  _height: 148.92,
}

export function X11140ControlCover(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11140_CONTROL_COVER}
      {...props}
      _style={extendStyle(X11140_CONTROL_COVER, props)}
    />
  )
}
