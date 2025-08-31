import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXCHANGE_CLIENT_ACCESS_SERVER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.exchange_client_access_server;',
  _width: 57,
  _height: 59,
}

export function ExchangeClientAccessServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXCHANGE_CLIENT_ACCESS_SERVER}
      {...props}
      _style={extendStyle(EXCHANGE_CLIENT_ACCESS_SERVER, props)}
    />
  )
}
