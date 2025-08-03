import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUIT_MAN_BLUE = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Suit_Man_Blue_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function SuitManBlue(props: DiagramNodeProps) {
  return <Shape {...SUIT_MAN_BLUE} {...props} />
}
