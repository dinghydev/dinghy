import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CIRCUIT_BREAKER_OFF = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.circuitBreaker2;elSwitchState=off;',
  _width: 75,
  _height: 20,
}

export function CircuitBreakerOff(props: DiagramNodeProps) {
  return <Shape {...CIRCUIT_BREAKER_OFF} {...props} />
}
