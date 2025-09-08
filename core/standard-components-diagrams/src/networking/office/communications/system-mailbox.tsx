import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SYSTEM_MAILBOX = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.system_mailbox;',
  },
  _original_width: 58,
  _original_height: 55,
}

export function SystemMailbox(props: DiagramNodeProps) {
  return (
    <Shape
      {...SYSTEM_MAILBOX}
      {...props}
      _style={extendStyle(SYSTEM_MAILBOX, props)}
    />
  )
}
