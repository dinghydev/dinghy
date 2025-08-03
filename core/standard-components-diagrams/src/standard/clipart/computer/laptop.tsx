import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LAPTOP = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Laptop_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Laptop(props: DiagramNodeProps) {
  return <Shape {...LAPTOP} {...props} />
}
