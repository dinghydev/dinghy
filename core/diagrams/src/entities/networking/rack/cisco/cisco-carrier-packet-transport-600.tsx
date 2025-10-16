import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_CARRIER_PACKET_TRANSPORT_600 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_carrier_packet_transport_600;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 89,
}

export function CiscoCarrierPacketTransport600(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_CARRIER_PACKET_TRANSPORT_600}
      {...props}
      _style={extendStyle(CISCO_CARRIER_PACKET_TRANSPORT_600, props)}
    />
  )
}
