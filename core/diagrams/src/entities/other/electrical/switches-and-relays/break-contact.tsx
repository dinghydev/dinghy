import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BREAK_CONTACT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.break_contact;',
  },
  _width: 75,
  _height: 10,
}

export function BreakContact(props: DiagramNodeProps) {
  return (
    <Shape
      {...BREAK_CONTACT}
      {...props}
      _style={extendStyle(BREAK_CONTACT, props)}
    />
  )
}
