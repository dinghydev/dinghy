import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SSD = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/SSD.svg;strokeColor=none;',
  _width: 66,
  _height: 60,
}

export function Ssd(props: DiagramNodeProps) {
  return <Shape {...SSD} {...props} />
}
