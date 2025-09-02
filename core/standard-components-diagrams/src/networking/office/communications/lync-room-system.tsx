import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LYNC_ROOM_SYSTEM = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.lync_room_system;',
  },
  _original_width: 80,
  _original_height: 42,
}

export function LyncRoomSystem(props: DiagramNodeProps) {
  return (
    <Shape
      {...LYNC_ROOM_SYSTEM}
      {...props}
      _style={extendStyle(LYNC_ROOM_SYSTEM, props)}
    />
  )
}
