import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10020_PLUNGER_WITH = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10020;points=[[0,0.5,0],[1,0.39,0],[1,0.61,0]]',
  _width: 37.18,
  _height: 42.84,
}

export function X10020PlungerWith(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10020_PLUNGER_WITH}
      {...props}
      _style={extendStyle(X10020_PLUNGER_WITH, props)}
    />
  )
}
