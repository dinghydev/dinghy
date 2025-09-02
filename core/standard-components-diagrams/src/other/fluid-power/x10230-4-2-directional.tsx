import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10230_4_2_DIRECTIONAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10230;points=[[0.59,0,0],[0.74,0,0],[0.59,1,0],[0.74,1,0],[0,0.5,0],[0,0.625,0],[0,0.75,0],[0.295,0.25,0],[0.295,0.75,0],[0.445,0.25,0],[0.445,0.75,0]]',
  },
  _original_width: 125.54,
  _original_height: 74.48,
}

export function X1023042Directional(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10230_4_2_DIRECTIONAL}
      {...props}
      _style={extendStyle(X10230_4_2_DIRECTIONAL, props)}
    />
  )
}
