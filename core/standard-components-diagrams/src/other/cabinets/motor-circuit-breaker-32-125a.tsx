import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MOTOR_CIRCUIT_BREAKER_32_125A = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.motor_cb_32_125a;',
  _width: 30,
  _height: 50,
}

export function MotorCircuitBreaker32125a(props: DiagramNodeProps) {
  return <Shape {...MOTOR_CIRCUIT_BREAKER_32_125A} {...props} />
}
