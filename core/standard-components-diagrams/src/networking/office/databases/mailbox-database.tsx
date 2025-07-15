import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAILBOX_DATABASE = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.mailbox_database;',
  _width: 53,
  _height: 55,
}

export function MailboxDatabase(props: DiagramNodeProps) {
  return <Shape {...MAILBOX_DATABASE} {...props} />
}
