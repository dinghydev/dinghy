import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BLACKBERRY = {
  _style:
    'image;html=1;image=img/lib/clip_art/telecommunication/BlackBerry_128x128.png',
  _width: 80,
  _height: 80,
}

export function Blackberry(props: DiagramNodeProps) {
  return <Shape {...BLACKBERRY} {...props} />
}
