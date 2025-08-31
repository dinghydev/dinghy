import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETWORK_INTERFACE_CARD = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/NetworkInterfaceCard.svg;strokeColor=none;',
  _width: 44,
  _height: 50,
}

export function NetworkInterfaceCard(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETWORK_INTERFACE_CARD}
      {...props}
      _style={extendStyle(NETWORK_INTERFACE_CARD, props)}
    />
  )
}
