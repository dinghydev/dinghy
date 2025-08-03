import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESERVATIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Reservations.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function Reservations(props: DiagramNodeProps) {
  return <Shape {...RESERVATIONS} {...props} />
}
