import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11130_CONTROL_COVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11130;points=[[0.062,1,0],[0.187,1,0],[0.5,0.88,0],[0.94,1,0]]',
  },
  _width: 296.94,
  _height: 148.92,
}

export function X11130ControlCover(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11130_CONTROL_COVER}
      {...props}
      _style={extendStyle(X11130_CONTROL_COVER, props)}
    />
  )
}
