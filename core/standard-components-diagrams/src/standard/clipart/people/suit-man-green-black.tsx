import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUIT_MAN_GREEN_BLACK = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Suit_Man_Green_Black_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function SuitManGreenBlack(props: DiagramNodeProps) {
  return <Shape {...SUIT_MAN_GREEN_BLACK} {...props} />
}
