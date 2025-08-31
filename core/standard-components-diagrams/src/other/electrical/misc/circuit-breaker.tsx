import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CIRCUIT_BREAKER = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.circuit_breaker;',
  _width: 100,
  _height: 13,
}

export function CircuitBreaker(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCUIT_BREAKER}
      {...props}
      _style={extendStyle(CIRCUIT_BREAKER, props)}
    />
  )
}
