import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOTOR_CIRCUIT_BREAKER_125_400A_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.motor_starter_125_400a;',
  },
  _original_width: 55.00000000000001,
  _original_height: 90,
}

export function MotorCircuitBreaker125400a2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOTOR_CIRCUIT_BREAKER_125_400A_2}
      {...props}
      _style={extendStyle(MOTOR_CIRCUIT_BREAKER_125_400A_2, props)}
    />
  )
}
