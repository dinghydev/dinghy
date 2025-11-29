import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUXILIARY_CONTACT_CIRCUIT_BREAKER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.cb_auxiliary_contact;',
  },
  _width: 4.5,
  _height: 50,
}

export function AuxiliaryContactCircuitBreaker(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, AUXILIARY_CONTACT_CIRCUIT_BREAKER)}
    />
  )
}
