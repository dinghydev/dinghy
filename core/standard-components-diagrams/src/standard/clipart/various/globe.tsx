import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GLOBE = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Earth_globe_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Globe(props: DiagramNodeProps) {
  return <Shape {...GLOBE} {...props} />
}
