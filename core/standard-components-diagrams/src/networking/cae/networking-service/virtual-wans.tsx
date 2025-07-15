import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_WANS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_WANs.svg;',
  _width: 50,
  _height: 50,
}

export function VirtualWans(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_WANS} {...props} />
}
