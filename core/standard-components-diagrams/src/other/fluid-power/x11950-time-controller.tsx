import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11950_TIME_CONTROLLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11950;points=[[0,0,0],[0.5,0,0],[1,0,0],[1,0.5,0],[1,1,0],[0.5,1,0],[0,1,0],[0,0.5,0]]',
  },
  _width: 46.22,
  _height: 27.82,
}

export function X11950TimeController(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11950_TIME_CONTROLLER}
      {...props}
      _style={extendStyle(X11950_TIME_CONTROLLER, props)}
    />
  )
}
