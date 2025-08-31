import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VPN_GATEWAY = {
  _style: {
    entity:
      'shape=mxgraph.cisco.hubs_and_gateways.vpn_gateway;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 91,
  _height: 48,
}

export function VpnGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...VPN_GATEWAY}
      {...props}
      _style={extendStyle(VPN_GATEWAY, props)}
    />
  )
}
