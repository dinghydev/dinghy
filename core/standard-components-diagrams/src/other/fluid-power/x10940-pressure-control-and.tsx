import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10940_PRESSURE_CONTROL_AND = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10940;points=[[0.335,1,0],[1,0.6,0]]',
  },
  _width: 56.1,
  _height: 93.28,
}

export function X10940PressureControlAnd(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10940_PRESSURE_CONTROL_AND}
      {...props}
      _style={extendStyle(X10940_PRESSURE_CONTROL_AND, props)}
    />
  )
}
