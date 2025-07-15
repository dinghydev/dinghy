import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXCHANGE_MAILBOX_SERVER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.exchange_mailbox_server;',
  _width: 57,
  _height: 59,
}

export function ExchangeMailboxServer(props: DiagramNodeProps) {
  return <Shape {...EXCHANGE_MAILBOX_SERVER} {...props} />
}
