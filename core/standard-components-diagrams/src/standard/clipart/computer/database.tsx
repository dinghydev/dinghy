import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Database_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Database(props: DiagramNodeProps) {
  return <Shape {...DATABASE} {...props} />
}
