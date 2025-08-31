import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCAL_NETWORK_GATEWAYS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Local_Network_Gateways.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
