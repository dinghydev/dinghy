import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11080_CONTROL_COVER = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11080;points=[[0.062,1,0],[0.187,1,0],[0.5,0.76,0],[0.814,1,0],[0.937,1,0]]',
  _width: 296.94,
  _height: 74.92,
}

export function X11080ControlCover(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11080_CONTROL_COVER}
      {...props}
      _style={extendStyle(X11080_CONTROL_COVER, props)}
    />
  )
}
