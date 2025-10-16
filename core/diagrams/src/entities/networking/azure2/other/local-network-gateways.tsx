import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOCAL_NETWORK_GATEWAYS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Local_Network_Gateways.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function LocalNetworkGateways(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOCAL_NETWORK_GATEWAYS}
      {...props}
      _style={extendStyle(LOCAL_NETWORK_GATEWAYS, props)}
    />
  )
}
