import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10330_4_2_DIRECTIONAL = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10330;points=[[0.57,0,0],[0.57,1,0],[0.71,0,0],[0.71,1,0],[0.285,0.25,0],[0.285,0.75,0],[0.43,0.25,0],[0.43,0.75,0],[0,0.5,0],[0,0.625,0],[0,0.75,0],[1,0.25,0],[1,0.5,0],[1,0.75,0]]',
  _width: 130.18,
  _height: 74.48,
}

export function X1033042Directional(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10330_4_2_DIRECTIONAL}
      {...props}
      _style={extendStyle(X10330_4_2_DIRECTIONAL, props)}
    />
  )
}
