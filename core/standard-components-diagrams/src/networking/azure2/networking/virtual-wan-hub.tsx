import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_WAN_HUB = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Virtual_WAN_Hub.svg;strokeColor=none;',
  _width: 65,
  _height: 64,
}

export function VirtualWanHub(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_WAN_HUB} {...props} />
}
