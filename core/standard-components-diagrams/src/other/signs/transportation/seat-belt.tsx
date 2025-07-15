import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEAT_BELT = {
  _style:
    'shape=mxgraph.signs.transportation.seat_belt;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 81,
  _height: 98,
}

export function SeatBelt(props: DiagramNodeProps) {
  return <Shape {...SEAT_BELT} {...props} />
}
