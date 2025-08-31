import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AUXILIARY_CONTACT_CONTACTOR_32_125A = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.auxiliary_contact_contactor_32_125a;',
  _width: 4.5,
  _height: 50,
}

export function AuxiliaryContactContactor32125a(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUXILIARY_CONTACT_CONTACTOR_32_125A}
      {...props}
      _style={extendStyle(AUXILIARY_CONTACT_CONTACTOR_32_125A, props)}
    />
  )
}
