import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CIRCUIT_BREAKER_3P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.cb_3p;',
  },
  _width: 27,
  _height: 50,
}

export function CircuitBreaker3p(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCUIT_BREAKER_3P}
      {...props}
      _style={extendStyle(CIRCUIT_BREAKER_3P, props)}
    />
  )
}
