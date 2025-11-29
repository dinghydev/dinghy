import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_NETWORK_GATEWAYS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Virtual_Network_Gateways.svg;strokeColor=none;',
  },
  _original_width: 52,
  _original_height: 69,
}

export function VirtualNetworkGateways(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, VIRTUAL_NETWORK_GATEWAYS)} />
  )
}
