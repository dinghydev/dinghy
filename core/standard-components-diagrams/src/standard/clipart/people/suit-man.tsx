import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUIT_MAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Suit_Man_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function SuitMan(props: DiagramNodeProps) {
  return (
    <Shape {...SUIT_MAN} {...props} _style={extendStyle(SUIT_MAN, props)} />
  )
}
