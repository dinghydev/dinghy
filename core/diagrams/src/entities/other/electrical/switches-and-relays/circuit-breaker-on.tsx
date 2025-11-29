import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CIRCUIT_BREAKER_ON = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.circuitBreaker2;elSwitchState=on;',
  },
  _width: 75,
  _height: 20,
}

export function CircuitBreakerOn(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CIRCUIT_BREAKER_ON)} />
}
