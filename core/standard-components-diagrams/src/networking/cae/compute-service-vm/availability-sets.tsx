import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AVAILABILITY_SETS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_Machines_Availability_Set.svg;',
  _width: 50,
  _height: 50,
}

export function AvailabilitySets(props: DiagramNodeProps) {
  return <Shape {...AVAILABILITY_SETS} {...props} />
}
