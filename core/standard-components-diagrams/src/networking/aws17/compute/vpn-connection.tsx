import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VPN_CONNECTION = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.vpn_connection;fillColor=#F58534;gradientColor=none;',
  },
  _width: 58.5,
  _height: 48,
}

export function VpnConnection(props: DiagramNodeProps) {
  return (
    <Shape
      {...VPN_CONNECTION}
      {...props}
      _style={extendStyle(VPN_CONNECTION, props)}
    />
  )
}
