import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_NETWORK_GATEWAYS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Virtual_Network_Gateways.svg;strokeColor=none;',
  },
  _width: 52,
  _height: 69,
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
