import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11060_CONTROL_COVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11060;points=[[0.061,1,0],[0.499,0.75,0]]',
  },
  _width: 296.94,
  _height: 74.78,
}

export function X11060ControlCover(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11060_CONTROL_COVER}
      {...props}
      _style={extendStyle(X11060_CONTROL_COVER, props)}
    />
  )
}
