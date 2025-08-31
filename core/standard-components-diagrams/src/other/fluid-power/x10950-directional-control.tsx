import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10950_DIRECTIONAL_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10950;points=[[0.335,1,0],[1,0.6,0]]',
  },
  _width: 56.1,
  _height: 93.28,
}

export function X10950DirectionalControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10950_DIRECTIONAL_CONTROL}
      {...props}
      _style={extendStyle(X10950_DIRECTIONAL_CONTROL, props)}
    />
  )
}
