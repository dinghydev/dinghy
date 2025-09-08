import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_NETWORKS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_Network.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 28.000000000000004,
}

export function VirtualNetworks(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_NETWORKS}
      {...props}
      _style={extendStyle(VIRTUAL_NETWORKS, props)}
    />
  )
}
