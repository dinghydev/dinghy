import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOCAL_NETWORK_GATEWAYS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Local_Network_Gateways.svg;',
  _width: 50,
  _height: 50,
}

export function LocalNetworkGateways(props: DiagramNodeProps) {
  return <Shape {...LOCAL_NETWORK_GATEWAYS} {...props} />
}
