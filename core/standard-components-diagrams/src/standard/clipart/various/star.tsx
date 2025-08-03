import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STAR = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Star_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Star(props: DiagramNodeProps) {
  return <Shape {...STAR} {...props} />
}
