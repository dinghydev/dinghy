import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATABASE_MOVE_STACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Database_Move_Stack_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function DatabaseMoveStack(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_MOVE_STACK}
      {...props}
      _style={extendStyle(DATABASE_MOVE_STACK, props)}
    />
  )
}
