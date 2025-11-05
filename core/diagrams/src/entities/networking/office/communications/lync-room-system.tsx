import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LYNC_ROOM_SYSTEM = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.lync_room_system;',
  },
  _width: 80,
  _height: 42,
}

export function LyncRoomSystem(props: NodeProps) {
  return (
    <Shape
      {...LYNC_ROOM_SYSTEM}
      {...props}
      _style={extendStyle(LYNC_ROOM_SYSTEM, props)}
    />
  )
}
