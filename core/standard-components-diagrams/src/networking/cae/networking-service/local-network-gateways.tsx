import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCAL_NETWORK_GATEWAYS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Local_Network_Gateways.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
