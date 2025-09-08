import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VPN_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vpn_server;',
  },
  _original_width: 40,
  _original_height: 52,
}

export function VpnServer(props: DiagramNodeProps) {
  return (
    <Shape {...VPN_SERVER} {...props} _style={extendStyle(VPN_SERVER, props)} />
  )
}
