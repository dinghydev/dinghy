import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUIT_WOMAN_BLACK = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Suit_Woman_Black_128x128.png',
  _width: 80,
  _height: 80,
}

export function SuitWomanBlack(props: DiagramNodeProps) {
  return <Shape {...SUIT_WOMAN_BLACK} {...props} />
}
