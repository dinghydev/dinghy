import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORK_INTERFACE_CARD = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/NetworkInterfaceCard.svg;strokeColor=none;',
  },
  _original_width: 44,
  _original_height: 50,
}

export function NetworkInterfaceCard(props: NodeProps) {
  return (
    <Shape
      {...NETWORK_INTERFACE_CARD}
      {...props}
      _style={extendStyle(NETWORK_INTERFACE_CARD, props)}
    />
  )
}
