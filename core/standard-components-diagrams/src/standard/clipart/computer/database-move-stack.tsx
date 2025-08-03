import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_MOVE_STACK = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Database_Move_Stack_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function DatabaseMoveStack(props: DiagramNodeProps) {
  return <Shape {...DATABASE_MOVE_STACK} {...props} />
}
