import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10340_3_2_DIRECTIONAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10340;points=[[0.685,0,0],[0.685,1,0],[0.455,0.25,0],[0.455,0.75,0],[0.57,0.75,0],[0.8,1,0],[0,0.625,0]]',
  },
  _width: 163.22,
  _height: 74.48,
}

export function X1034032Directional(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10340_3_2_DIRECTIONAL}
      {...props}
      _style={extendStyle(X10340_3_2_DIRECTIONAL, props)}
    />
  )
}
