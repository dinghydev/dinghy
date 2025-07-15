import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FRONT_DOORS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Front_Doors.svg;',
  _width: 50,
  _height: 44,
}

export function FrontDoors(props: DiagramNodeProps) {
  return <Shape {...FRONT_DOORS} {...props} />
}
