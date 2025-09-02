import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INVERTING_CONTACT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.inverting_contact;',
  },
  _original_width: 10,
  _original_height: 10,
}

export function InvertingContact(props: DiagramNodeProps) {
  return (
    <Shape
      {...INVERTING_CONTACT}
      {...props}
      _style={extendStyle(INVERTING_CONTACT, props)}
    />
  )
}
