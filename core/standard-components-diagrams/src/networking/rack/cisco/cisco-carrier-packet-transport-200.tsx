import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_CARRIER_PACKET_TRANSPORT_200 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_carrier_packet_transport_200;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function CiscoCarrierPacketTransport200(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_CARRIER_PACKET_TRANSPORT_200}
      {...props}
      _style={extendStyle(CISCO_CARRIER_PACKET_TRANSPORT_200, props)}
    />
  )
}
