import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MOTOR_CIRCUIT_BREAKER_1_32A_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.motor_starter_1_32a;',
  },
  _original_width: 27,
  _original_height: 43,
}

export function MotorCircuitBreaker132a2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOTOR_CIRCUIT_BREAKER_1_32A_2}
      {...props}
      _style={extendStyle(MOTOR_CIRCUIT_BREAKER_1_32A_2, props)}
    />
  )
}
