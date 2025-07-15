import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AUXILIARY_CONTACT_CIRCUIT_BREAKER = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.cb_auxiliary_contact;',
  _width: 4.5,
  _height: 50,
}

export function AuxiliaryContactCircuitBreaker(props: DiagramNodeProps) {
  return <Shape {...AUXILIARY_CONTACT_CIRCUIT_BREAKER} {...props} />
}
