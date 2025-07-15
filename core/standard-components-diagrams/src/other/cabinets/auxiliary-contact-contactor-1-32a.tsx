import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AUXILIARY_CONTACT_CONTACTOR_1_32A = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.auxiliary_contact_contactor_1_32a;',
  _width: 4.5,
  _height: 43,
}

export function AuxiliaryContactContactor132a(props: DiagramNodeProps) {
  return <Shape {...AUXILIARY_CONTACT_CONTACTOR_1_32A} {...props} />
}
