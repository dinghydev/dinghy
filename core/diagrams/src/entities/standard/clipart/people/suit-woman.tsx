import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUIT_WOMAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Suit_Woman_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function SuitWoman(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SUIT_WOMAN)} />
}
