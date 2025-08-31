import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOTOR_CIRCUIT_BREAKER_32_125A_2 = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.motor_starter_32_125a;',
  _width: 30,
  _height: 50,
}

export function MotorCircuitBreaker32125a2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOTOR_CIRCUIT_BREAKER_32_125A_2}
      {...props}
      _style={extendStyle(MOTOR_CIRCUIT_BREAKER_32_125A_2, props)}
    />
  )
}
