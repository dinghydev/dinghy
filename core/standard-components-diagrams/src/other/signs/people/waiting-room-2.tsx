import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WAITING_ROOM_2 = {
  _style:
    'shape=mxgraph.signs.people.waiting_room_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 89,
  _height: 98,
}

export function WaitingRoom2(props: DiagramNodeProps) {
  return <Shape {...WAITING_ROOM_2} {...props} />
}
