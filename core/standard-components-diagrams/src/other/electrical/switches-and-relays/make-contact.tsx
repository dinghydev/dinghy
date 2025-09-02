import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAKE_CONTACT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.make_contact;',
  },
  _original_width: 75,
  _original_height: 16,
}

export function MakeContact(props: DiagramNodeProps) {
  return (
    <Shape
      {...MAKE_CONTACT}
      {...props}
      _style={extendStyle(MAKE_CONTACT, props)}
    />
  )
}
