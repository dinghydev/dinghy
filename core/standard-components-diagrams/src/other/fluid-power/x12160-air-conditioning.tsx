import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X12160_AIR_CONDITIONING = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12160_detailed;points=[[0,0.505,0],[1,0.505,0],[0.236,1,0]]',
  _width: 316.36,
  _height: 147.46,
}

export function X12160AirConditioning(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12160_AIR_CONDITIONING}
      {...props}
      _style={extendStyle(X12160_AIR_CONDITIONING, props)}
    />
  )
}
