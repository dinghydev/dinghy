import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CIRCUIT_BREAKER_ON = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.circuitBreaker2;elSwitchState=on;',
  _width: 75,
  _height: 20,
}

export function CircuitBreakerOn(props: DiagramNodeProps) {
  return <Shape {...CIRCUIT_BREAKER_ON} {...props} />
}
