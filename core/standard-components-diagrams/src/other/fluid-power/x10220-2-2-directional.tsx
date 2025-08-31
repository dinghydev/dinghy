import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10220_2_2_DIRECTIONAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10220;points=[[0.665,0,0],[0.665,1,0],[0,0.62,0],[0.37,0.25,0],[0.37,0.75,0]]',
  },
  _width: 125.54,
  _height: 74.6,
}

export function X1022022Directional(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10220_2_2_DIRECTIONAL}
      {...props}
      _style={extendStyle(X10220_2_2_DIRECTIONAL, props)}
    />
  )
}
