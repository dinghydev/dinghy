import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUIT_MAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Suit_Man_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function SuitMan(props: DiagramNodeProps) {
  return (
    <Shape {...SUIT_MAN} {...props} _style={extendStyle(SUIT_MAN, props)} />
  )
}
