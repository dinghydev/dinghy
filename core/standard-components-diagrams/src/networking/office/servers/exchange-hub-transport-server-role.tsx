import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXCHANGE_HUB_TRANSPORT_SERVER_ROLE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.exchange_hub_transport_server_role;',
  },
  _original_width: 52,
  _original_height: 59,
}

export function ExchangeHubTransportServerRole(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXCHANGE_HUB_TRANSPORT_SERVER_ROLE}
      {...props}
      _style={extendStyle(EXCHANGE_HUB_TRANSPORT_SERVER_ROLE, props)}
    />
  )
}
