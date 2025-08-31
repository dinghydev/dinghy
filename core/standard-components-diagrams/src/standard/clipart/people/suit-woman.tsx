import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUIT_WOMAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Suit_Woman_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function SuitWoman(props: DiagramNodeProps) {
  return (
    <Shape {...SUIT_WOMAN} {...props} _style={extendStyle(SUIT_WOMAN, props)} />
  )
}
