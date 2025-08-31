import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VPN_GATEWAY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.vpn_gateway;',
  },
  _width: 60,
  _height: 60,
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
