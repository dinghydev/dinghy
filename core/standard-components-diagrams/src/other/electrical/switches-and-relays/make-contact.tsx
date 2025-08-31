import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAKE_CONTACT = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.make_contact;',
  _width: 75,
  _height: 16,
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
