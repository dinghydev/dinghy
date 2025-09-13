import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_NETWORKS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Virtual_Networks.svg;strokeColor=none;',
  },
  _width: 67,
  _height: 40,
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
