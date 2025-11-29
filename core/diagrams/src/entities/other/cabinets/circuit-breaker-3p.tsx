import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CIRCUIT_BREAKER_3P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.cb_3p;',
  },
  _width: 27,
  _height: 50,
}

export function CircuitBreaker3p(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CIRCUIT_BREAKER_3P)} />
}
