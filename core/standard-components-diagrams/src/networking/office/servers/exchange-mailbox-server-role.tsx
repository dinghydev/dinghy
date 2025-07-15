import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXCHANGE_MAILBOX_SERVER_ROLE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.exchange_mailbox_server_role;',
  _width: 52,
  _height: 59,
}

export function ExchangeMailboxServerRole(props: DiagramNodeProps) {
  return <Shape {...EXCHANGE_MAILBOX_SERVER_ROLE} {...props} />
}
