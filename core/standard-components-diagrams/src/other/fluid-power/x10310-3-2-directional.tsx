import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10310_3_2_DIRECTIONAL = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10310;points=[[0.55,0,0],[0.55,1,0],[0,0.62,0],[1,0.62,0],[0.35,0.25,0],[0.35,0.75,0],[0.45,0.75,0],[0.65,1,0]]',
  _width: 186.48,
  _height: 74.48,
}

export function X1031032Directional(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10310_3_2_DIRECTIONAL}
      {...props}
      _style={extendStyle(X10310_3_2_DIRECTIONAL, props)}
    />
  )
}
