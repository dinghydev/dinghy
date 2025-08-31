import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELECTRIC_MOTOR = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;align=center;html=1;shape=mxgraph.pid.engines.electric_motor;fontSize=45;',
  },
  _width: 60,
  _height: 60,
}

export function ElectricMotor(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELECTRIC_MOTOR}
      {...props}
      _style={extendStyle(ELECTRIC_MOTOR, props)}
    />
  )
}
