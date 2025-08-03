import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUIT_WOMAN_GREEN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Suit_Woman_Green_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function SuitWomanGreen(props: DiagramNodeProps) {
  return <Shape {...SUIT_WOMAN_GREEN} {...props} />
}
