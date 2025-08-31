import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10960_DIRECTIONAL_CONTROL = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10960;points=[[0.335,1,0],[1,0.6,0]]',
  _width: 56.1,
  _height: 93.28,
}

export function X10960DirectionalControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10960_DIRECTIONAL_CONTROL}
      {...props}
      _style={extendStyle(X10960_DIRECTIONAL_CONTROL, props)}
    />
  )
}
