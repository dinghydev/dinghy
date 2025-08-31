import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXCHANGE_EDGE_TRANSPORT_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.exchange_edge_transport_server;',
  },
  _width: 57,
  _height: 55,
}

export function ExchangeEdgeTransportServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXCHANGE_EDGE_TRANSPORT_SERVER}
      {...props}
      _style={extendStyle(EXCHANGE_EDGE_TRANSPORT_SERVER, props)}
    />
  )
}
