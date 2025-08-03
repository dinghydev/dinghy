import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IPHONE = {
  _style:
    'image;html=1;image=img/lib/clip_art/telecommunication/iPhone_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Iphone(props: DiagramNodeProps) {
  return <Shape {...IPHONE} {...props} />
}
