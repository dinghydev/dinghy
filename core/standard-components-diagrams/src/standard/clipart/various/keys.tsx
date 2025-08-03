import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KEYS = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Keys_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Keys(props: DiagramNodeProps) {
  return <Shape {...KEYS} {...props} />
}
