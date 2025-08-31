import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11250_REVERSIBLE_PUMP_MOTOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11250;points=[[0.567,0,0],[0.567,1,0],[0.95,1,0]]',
  },
  _width: 97.7,
  _height: 93.94,
}

export function X11250ReversiblePumpMotor(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11250_REVERSIBLE_PUMP_MOTOR}
      {...props}
      _style={extendStyle(X11250_REVERSIBLE_PUMP_MOTOR, props)}
    />
  )
}
