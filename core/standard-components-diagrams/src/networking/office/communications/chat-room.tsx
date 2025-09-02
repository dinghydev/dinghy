import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHAT_ROOM = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.chat_room;',
  },
  _original_width: 46,
  _original_height: 48,
}

export function ChatRoom(props: DiagramNodeProps) {
  return (
    <Shape {...CHAT_ROOM} {...props} _style={extendStyle(CHAT_ROOM, props)} />
  )
}
