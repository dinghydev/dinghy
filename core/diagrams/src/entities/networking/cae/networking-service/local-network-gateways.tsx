import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOCAL_NETWORK_GATEWAYS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Local_Network_Gateways.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function LocalNetworkGateways(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, LOCAL_NETWORK_GATEWAYS)} />
  )
}
