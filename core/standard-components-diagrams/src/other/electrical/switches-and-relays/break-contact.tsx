import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BREAK_CONTACT = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.break_contact;',
  _width: 75,
  _height: 10,
}

export function BreakContact(props: DiagramNodeProps) {
  return <Shape {...BREAK_CONTACT} {...props} />
}
