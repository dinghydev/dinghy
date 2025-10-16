import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AUXILIARY_CONTACT_CIRCUIT_BREAKER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.cb_auxiliary_contact;',
  },
  _width: 4.5,
  _height: 50,
}

export function AuxiliaryContactCircuitBreaker(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUXILIARY_CONTACT_CIRCUIT_BREAKER}
      {...props}
      _style={extendStyle(AUXILIARY_CONTACT_CIRCUIT_BREAKER, props)}
    />
  )
}
