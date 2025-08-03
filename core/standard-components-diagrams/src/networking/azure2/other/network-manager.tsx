import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETWORK_MANAGER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Network_Manager.svg;strokeColor=none;',
  _width: 64,
  _height: 68,
}

export function NetworkManager(props: DiagramNodeProps) {
  return <Shape {...NETWORK_MANAGER} {...props} />
}
