import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CIRCUIT_BREAKER_1P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.cb_1p;',
  },
  _width: 9,
  _height: 50,
}

export function CircuitBreaker1p(props: NodeProps) {
  return (
    <Shape
      {...CIRCUIT_BREAKER_1P}
      {...props}
      _style={extendStyle(CIRCUIT_BREAKER_1P, props)}
    />
  )
}
