import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MAILBOX_DATABASE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.mailbox_database;',
  },
  _original_width: 53,
  _original_height: 55,
}

export function MailboxDatabase(props: DiagramNodeProps) {
  return (
    <Shape
      {...MAILBOX_DATABASE}
      {...props}
      _style={extendStyle(MAILBOX_DATABASE, props)}
    />
  )
}
