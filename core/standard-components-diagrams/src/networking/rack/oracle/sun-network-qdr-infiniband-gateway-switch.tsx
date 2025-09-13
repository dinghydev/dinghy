import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SUN_NETWORK_QDR_INFINIBAND_GATEWAY_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sun_network_qdr_infiniband_gateway_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 15,
}

export function SunNetworkQdrInfinibandGatewaySwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUN_NETWORK_QDR_INFINIBAND_GATEWAY_SWITCH}
      {...props}
      _style={extendStyle(SUN_NETWORK_QDR_INFINIBAND_GATEWAY_SWITCH, props)}
    />
  )
}
