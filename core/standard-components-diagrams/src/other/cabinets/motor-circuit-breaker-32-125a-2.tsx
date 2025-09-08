import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MOTOR_CIRCUIT_BREAKER_32_125A_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.motor_starter_32_125a;',
  },
  _original_width: 30,
  _original_height: 50,
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
