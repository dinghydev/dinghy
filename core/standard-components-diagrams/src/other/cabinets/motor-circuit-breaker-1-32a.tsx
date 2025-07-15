import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MOTOR_CIRCUIT_BREAKER_1_32A = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.motor_cb_1_32a;',
  _width: 27,
  _height: 43,
}

export function MotorCircuitBreaker132a(props: DiagramNodeProps) {
  return <Shape {...MOTOR_CIRCUIT_BREAKER_1_32A} {...props} />
}
