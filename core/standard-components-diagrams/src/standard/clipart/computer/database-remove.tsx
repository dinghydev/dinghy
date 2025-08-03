import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_REMOVE = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Database_Remove_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function DatabaseRemove(props: DiagramNodeProps) {
  return <Shape {...DATABASE_REMOVE} {...props} />
}
