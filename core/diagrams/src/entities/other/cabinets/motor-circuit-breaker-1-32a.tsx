import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOTOR_CIRCUIT_BREAKER_1_32A = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.motor_cb_1_32a;',
  },
  _width: 27,
  _height: 43,
}

export function MotorCircuitBreaker132a(props: NodeProps) {
  return (
    <Shape
      {...MOTOR_CIRCUIT_BREAKER_1_32A}
      {...props}
      _style={extendStyle(MOTOR_CIRCUIT_BREAKER_1_32A, props)}
    />
  )
}
