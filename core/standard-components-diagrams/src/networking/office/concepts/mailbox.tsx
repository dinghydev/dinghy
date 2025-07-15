import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAILBOX = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.mailbox;',
  _width: 53,
  _height: 49,
}

export function Mailbox(props: DiagramNodeProps) {
  return <Shape {...MAILBOX} {...props} />
}
