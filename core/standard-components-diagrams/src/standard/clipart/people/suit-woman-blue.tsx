import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUIT_WOMAN_BLUE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Suit_Woman_Blue_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function SuitWomanBlue(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUIT_WOMAN_BLUE}
      {...props}
      _style={extendStyle(SUIT_WOMAN_BLUE, props)}
    />
  )
}
