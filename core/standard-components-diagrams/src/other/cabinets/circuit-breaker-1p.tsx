import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CIRCUIT_BREAKER_1P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.cb_1p;',
  },
  _original_width: 9,
  _original_height: 50,
}

export function CircuitBreaker1p(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCUIT_BREAKER_1P}
      {...props}
      _style={extendStyle(CIRCUIT_BREAKER_1P, props)}
    />
  )
}
