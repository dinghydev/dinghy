import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11100_CONTROL_COVER = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11100;points=[[0.062,1,0],[0.187,1,0],[0.5,0.875,0],[0.814,1,0]]',
  _width: 296.94,
  _height: 148.92,
}

export function X11100ControlCover(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11100_CONTROL_COVER}
      {...props}
      _style={extendStyle(X11100_CONTROL_COVER, props)}
    />
  )
}
