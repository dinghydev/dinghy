import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_MOVE_STACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Database_Move_Stack_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function DatabaseMoveStack(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATABASE_MOVE_STACK)} />
}
