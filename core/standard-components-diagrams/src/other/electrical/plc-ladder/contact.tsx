import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTACT = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.plc_ladder.contact;',
  _width: 50,
  _height: 25,
}

export function Contact(props: DiagramNodeProps) {
  return <Shape {...CONTACT} {...props} _style={extendStyle(CONTACT, props)} />
}
