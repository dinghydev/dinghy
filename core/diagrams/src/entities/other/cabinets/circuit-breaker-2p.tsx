import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CIRCUIT_BREAKER_2P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.cb_2p;',
  },
  _width: 18,
  _height: 50,
}

export function CircuitBreaker2p(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CIRCUIT_BREAKER_2P)} />
}
