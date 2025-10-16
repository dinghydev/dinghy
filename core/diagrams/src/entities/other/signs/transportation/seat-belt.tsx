import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SEAT_BELT = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.seat_belt;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 81,
  _original_height: 98,
}

export function SeatBelt(props: DiagramNodeProps) {
  return (
    <Shape {...SEAT_BELT} {...props} _style={extendStyle(SEAT_BELT, props)} />
  )
}
