import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_MOVE_STACK = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Database_Move_Stack_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
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
