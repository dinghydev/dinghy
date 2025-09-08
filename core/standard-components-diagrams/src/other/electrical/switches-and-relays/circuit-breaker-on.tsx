import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CIRCUIT_BREAKER_ON = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.circuitBreaker2;elSwitchState=on;',
  },
  _original_width: 75,
  _original_height: 20,
}

export function CircuitBreakerOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCUIT_BREAKER_ON}
      {...props}
      _style={extendStyle(CIRCUIT_BREAKER_ON, props)}
    />
  )
}
