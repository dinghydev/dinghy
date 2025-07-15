import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUIT_WOMAN = {
  _style: 'image;html=1;image=img/lib/clip_art/people/Suit_Woman_128x128.png',
  _width: 80,
  _height: 80,
}

export function SuitWoman(props: DiagramNodeProps) {
  return <Shape {...SUIT_WOMAN} {...props} />
}
