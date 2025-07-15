import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AVAILABILITY_SETS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Availability_Sets.svg;',
  _width: 68,
  _height: 68,
}

export function AvailabilitySets(props: DiagramNodeProps) {
  return <Shape {...AVAILABILITY_SETS} {...props} />
}
