import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUIT_MAN_GREEN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Suit_Man_Green_Black_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function SuitManGreenBlack(props: NodeProps) {
  return (
    <Shape
      {...SUIT_MAN_GREEN_BLACK}
      {...props}
      _style={extendStyle(SUIT_MAN_GREEN_BLACK, props)}
    />
  )
}
