import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUIT_MAN_GREEN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Suit_Man_Green_128x128.png',
  _width: 80,
  _height: 80,
}

export function SuitManGreen(props: DiagramNodeProps) {
  return <Shape {...SUIT_MAN_GREEN} {...props} />
}
