import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CIRCUIT_BREAKER_4P = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.cb_4p;',
  _width: 36,
  _height: 50,
}

export function CircuitBreaker4p(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCUIT_BREAKER_4P}
      {...props}
      _style={extendStyle(CIRCUIT_BREAKER_4P, props)}
    />
  )
}
