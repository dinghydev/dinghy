import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOTOR_CIRCUIT_BREAKER_1_32A = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.motor_cb_1_32a;',
  },
  _original_width: 27,
  _original_height: 43,
}

export function MotorCircuitBreaker132a(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOTOR_CIRCUIT_BREAKER_1_32A}
      {...props}
      _style={extendStyle(MOTOR_CIRCUIT_BREAKER_1_32A, props)}
    />
  )
}
