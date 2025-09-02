import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROUTER_VPN = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/security/Router_VPN.svg;strokeColor=none;',
  },
  _original_width: 55.800000000000004,
  _original_height: 39.6,
}

export function RouterVpn(props: DiagramNodeProps) {
  return (
    <Shape {...ROUTER_VPN} {...props} _style={extendStyle(ROUTER_VPN, props)} />
  )
}
