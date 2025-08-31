import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10400_5_2_DIRECTIONAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10400;points=[[0.68,0,0],[0.68,1,0],[0.938,0,0],[0.938,1,0],[0.81,1,0],[0.3,0.25,0],[0.425,0.75,0],[0.553,0.25,0],[0.553,0.75,0],[0.3,0.75,0]]',
  },
  _width: 145.2,
  _height: 75.02,
}

export function X1040052Directional(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10400_5_2_DIRECTIONAL}
      {...props}
      _style={extendStyle(X10400_5_2_DIRECTIONAL, props)}
    />
  )
}
