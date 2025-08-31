import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10270_3_2_DIRECTIONAL = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10270;points=[[0.68,0,0],[0.68,1,0],[0.795,1,0],[0.445,0.25,0],[0.445,0.75,0],[0.56,0.75,0]]',
  _width: 160.16,
  _height: 74.48,
}

export function X1027032Directional(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10270_3_2_DIRECTIONAL}
      {...props}
      _style={extendStyle(X10270_3_2_DIRECTIONAL, props)}
    />
  )
}
