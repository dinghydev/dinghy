import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUXILIARY_CONTACT_CONTACTOR_32_125A = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.auxiliary_contact_contactor_32_125a;',
  },
  _width: 4.5,
  _height: 50,
}

export function AuxiliaryContactContactor32125a(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, AUXILIARY_CONTACT_CONTACTOR_32_125A)}
    />
  )
}
