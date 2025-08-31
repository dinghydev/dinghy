import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_CARRIER_PACKET_TRANSPORT_50 = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_carrier_packet_transport_50;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 15,
}

export function CiscoCarrierPacketTransport50(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_CARRIER_PACKET_TRANSPORT_50}
      {...props}
      _style={extendStyle(CISCO_CARRIER_PACKET_TRANSPORT_50, props)}
    />
  )
}
