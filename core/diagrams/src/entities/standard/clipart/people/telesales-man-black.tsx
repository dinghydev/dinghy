import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TELESALES_MAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Telesales_Man_Black_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function TelesalesManBlack(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TELESALES_MAN_BLACK)} />
}
