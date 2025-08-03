import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESERVED_CAPACITY = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Reserved_Capacity.svg;strokeColor=none;',
  _width: 57.99999999999999,
  _height: 68,
}

export function ReservedCapacity(props: DiagramNodeProps) {
  return <Shape {...RESERVED_CAPACITY} {...props} />
}
