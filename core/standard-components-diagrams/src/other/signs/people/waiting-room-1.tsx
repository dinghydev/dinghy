import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WAITING_ROOM_1 = {
  _style:
    'shape=mxgraph.signs.people.waiting_room_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 77,
  _height: 100,
}

export function WaitingRoom1(props: DiagramNodeProps) {
  return <Shape {...WAITING_ROOM_1} {...props} />
}
