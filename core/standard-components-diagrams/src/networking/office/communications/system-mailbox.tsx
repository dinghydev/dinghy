import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SYSTEM_MAILBOX = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.system_mailbox;',
  _width: 58,
  _height: 55,
}

export function SystemMailbox(props: DiagramNodeProps) {
  return <Shape {...SYSTEM_MAILBOX} {...props} />
}
