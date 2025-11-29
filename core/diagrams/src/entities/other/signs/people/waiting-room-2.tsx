import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WAITING_ROOM_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.waiting_room_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 89,
  _original_height: 98,
}

export function WaitingRoom2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WAITING_ROOM_2)} />
}
