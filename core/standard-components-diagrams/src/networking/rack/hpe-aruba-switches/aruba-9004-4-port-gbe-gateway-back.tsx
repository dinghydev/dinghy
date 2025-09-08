import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARUBA_9004_4_PORT_GBE_GATEWAY_BACK = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.gateways_controllers.aruba_9004_4_port_gbe_gateway_front;',
  },
  _original_width: 71,
  _original_height: 15,
}

export function Aruba90044PortGbeGatewayBack(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARUBA_9004_4_PORT_GBE_GATEWAY_BACK}
      {...props}
      _style={extendStyle(ARUBA_9004_4_PORT_GBE_GATEWAY_BACK, props)}
    />
  )
}
