import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOCK = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Lock_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Lock(props: DiagramNodeProps) {
  return <Shape {...LOCK} {...props} />
}
