import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_WANS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Virtual_WANs.svg;',
  _width: 65,
  _height: 64,
}

export function VirtualWans(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_WANS} {...props} />
}
