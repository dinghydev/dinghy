import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUIT_MAN_GREEN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Suit_Man_Green_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function SuitManGreen(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUIT_MAN_GREEN}
      {...props}
      _style={extendStyle(SUIT_MAN_GREEN, props)}
    />
  )
}
