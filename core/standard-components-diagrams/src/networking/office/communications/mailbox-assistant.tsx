import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MAILBOX_ASSISTANT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.mailbox_assistant;',
  },
  _original_width: 59,
  _original_height: 57,
}

export function MailboxAssistant(props: DiagramNodeProps) {
  return (
    <Shape
      {...MAILBOX_ASSISTANT}
      {...props}
      _style={extendStyle(MAILBOX_ASSISTANT, props)}
    />
  )
}
