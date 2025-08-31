import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROOM_MAILBOX = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.room_mailbox;',
  },
  _width: 60,
  _height: 57,
}

export function RoomMailbox(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROOM_MAILBOX}
      {...props}
      _style={extendStyle(ROOM_MAILBOX, props)}
    />
  )
}
