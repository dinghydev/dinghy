import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_NETWORKS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_Network.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 28.000000000000004,
}

export function VirtualNetworks(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VIRTUAL_NETWORKS)} />
}
