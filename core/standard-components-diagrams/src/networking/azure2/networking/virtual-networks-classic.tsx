import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_NETWORKS_CLASSIC = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Virtual_Networks_Classic.svg;strokeColor=none;',
  _width: 67,
  _height: 40,
}

export function VirtualNetworksClassic(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_NETWORKS_CLASSIC} {...props} />
}
