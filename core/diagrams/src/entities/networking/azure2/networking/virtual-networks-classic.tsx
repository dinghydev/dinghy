import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_NETWORKS_CLASSIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Virtual_Networks_Classic.svg;strokeColor=none;',
  },
  _width: 67,
  _height: 40,
}

export function VirtualNetworksClassic(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, VIRTUAL_NETWORKS_CLASSIC)} />
  )
}
