import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUIT_MAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Suit_Man_Black_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function SuitManBlack(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUIT_MAN_BLACK}
      {...props}
      _style={extendStyle(SUIT_MAN_BLACK, props)}
    />
  )
}
