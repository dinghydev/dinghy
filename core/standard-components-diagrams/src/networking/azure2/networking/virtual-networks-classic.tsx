import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_NETWORKS_CLASSIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Virtual_Networks_Classic.svg;strokeColor=none;',
  },
  _width: 67,
  _height: 40,
}

export function VirtualNetworksClassic(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_NETWORKS_CLASSIC}
      {...props}
      _style={extendStyle(VIRTUAL_NETWORKS_CLASSIC, props)}
    />
  )
}
