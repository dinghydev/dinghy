import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10380_4_2_DIRECTIONAL = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10380;points=[[0.66,0,0],[0.66,1,0],[0.785,0,0],[0.785,1,0],[0,1,0],[0.415,0.25,0],[0.415,0.75,0],[0.54,0.25,0],[0.54,0.75,0]]',
  _width: 150.74,
  _height: 75.06,
}

export function X1038042Directional(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10380_4_2_DIRECTIONAL}
      {...props}
      _style={extendStyle(X10380_4_2_DIRECTIONAL, props)}
    />
  )
}
