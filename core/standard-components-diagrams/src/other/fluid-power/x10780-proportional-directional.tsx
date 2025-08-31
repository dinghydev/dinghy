import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10780_PROPORTIONAL_DIRECTIONAL = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10780;points=[[0.407,0.2,0],[0.48,0.2,0],[0.407,1,0],[0.48,1,0],[0,0.6,0],[0,0.7,0],[0,0.8,0]]',
  _width: 251.14,
  _height: 93.04,
}

export function X10780ProportionalDirectional(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10780_PROPORTIONAL_DIRECTIONAL}
      {...props}
      _style={extendStyle(X10780_PROPORTIONAL_DIRECTIONAL, props)}
    />
  )
}
