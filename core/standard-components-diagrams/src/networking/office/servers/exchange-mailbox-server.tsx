import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXCHANGE_MAILBOX_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.exchange_mailbox_server;',
  },
  _original_width: 57,
  _original_height: 59,
}

export function ExchangeMailboxServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXCHANGE_MAILBOX_SERVER}
      {...props}
      _style={extendStyle(EXCHANGE_MAILBOX_SERVER, props)}
    />
  )
}
