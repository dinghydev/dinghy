import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_NETWORKS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_Network.svg;',
  _width: 50,
  _height: 28.000000000000004,
}

export function VirtualNetworks(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_NETWORKS} {...props} />
}
