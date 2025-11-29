import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUXILIARY_CONTACT_CONTACTOR_1_32A = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.auxiliary_contact_contactor_1_32a;',
  },
  _width: 4.5,
  _height: 43,
}

export function AuxiliaryContactContactor132a(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, AUXILIARY_CONTACT_CONTACTOR_1_32A)}
    />
  )
}
