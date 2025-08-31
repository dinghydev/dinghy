import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X12360_PISTON_TYPE_ACCUMULATOR = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12360;points=[[0.17,1,0]]',
  _width: 108.88,
  _height: 111.84,
}

export function X12360PistonTypeAccumulator(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12360_PISTON_TYPE_ACCUMULATOR}
      {...props}
      _style={extendStyle(X12360_PISTON_TYPE_ACCUMULATOR, props)}
    />
  )
}
