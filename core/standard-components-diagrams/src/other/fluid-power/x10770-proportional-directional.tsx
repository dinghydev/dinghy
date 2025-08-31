import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10770_PROPORTIONAL_DIRECTIONAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10770;points=[[0.258,0,0],[0.258,1,0],[0.405,0,0],[0.405,1,0],[1,0.5,0],[1,0.625,0],[1,0.75,0]]',
  },
  _width: 125.44,
  _height: 74.44,
}

export function X10770ProportionalDirectional(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10770_PROPORTIONAL_DIRECTIONAL}
      {...props}
      _style={extendStyle(X10770_PROPORTIONAL_DIRECTIONAL, props)}
    />
  )
}
