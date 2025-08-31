import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10930_PRESSURE_CONTROL_AND = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10930;points=[[0.335,1,0],[1,0.6,0]]',
  },
  _width: 56.1,
  _height: 93.28,
}

export function X10930PressureControlAnd(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10930_PRESSURE_CONTROL_AND}
      {...props}
      _style={extendStyle(X10930_PRESSURE_CONTROL_AND, props)}
    />
  )
}
