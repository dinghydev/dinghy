import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARUBA_9012_10_PORT_GBE_GATEWAY_FRONT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.gateways_controllers.aruba_9012_10_port_gbe_gateway_front;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Aruba901210PortGbeGatewayFront(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARUBA_9012_10_PORT_GBE_GATEWAY_FRONT}
      {...props}
      _style={extendStyle(ARUBA_9012_10_PORT_GBE_GATEWAY_FRONT, props)}
    />
  )
}
