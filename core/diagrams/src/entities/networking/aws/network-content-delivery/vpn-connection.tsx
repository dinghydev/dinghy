import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VPN_CONNECTION = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.vpn_connection;',
  },
  _original_width: 70,
  _original_height: 78,
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
