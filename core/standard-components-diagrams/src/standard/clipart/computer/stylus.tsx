import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STYLUS = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Stylus_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Stylus(props: DiagramNodeProps) {
  return <Shape {...STYLUS} {...props} />
}
