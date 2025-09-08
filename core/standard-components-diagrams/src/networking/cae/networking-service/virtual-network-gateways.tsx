import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_NETWORK_GATEWAYS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/VPN_Gateway.svg;strokeColor=none;',
  },
  _original_width: 45,
  _original_height: 50,
}

export function VirtualNetworkGateways(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_NETWORK_GATEWAYS}
      {...props}
      _style={extendStyle(VIRTUAL_NETWORK_GATEWAYS, props)}
    />
  )
}
