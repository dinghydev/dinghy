import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const UM_ENABLED_MAILBOX = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.um_enabled_mailbox;',
  _width: 59,
  _height: 57,
}

export function UmEnabledMailbox(props: DiagramNodeProps) {
  return <Shape {...UM_ENABLED_MAILBOX} {...props} />
}
