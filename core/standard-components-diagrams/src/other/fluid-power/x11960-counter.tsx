import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11960_COUNTER = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11960;points=[[0,0.5,0]]',
  _width: 55.82,
  _height: 37.14,
}

export function X11960Counter(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11960_COUNTER}
      {...props}
      _style={extendStyle(X11960_COUNTER, props)}
    />
  )
}
