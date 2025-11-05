import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROUTER_VPN = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/security/Router_VPN.svg;strokeColor=none;',
  },
  _width: 55.800000000000004,
  _height: 39.6,
}

export function RouterVpn(props: NodeProps) {
  return (
    <Shape {...ROUTER_VPN} {...props} _style={extendStyle(ROUTER_VPN, props)} />
  )
}
