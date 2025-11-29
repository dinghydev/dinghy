import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TELESALES_WOMAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Telesales_Woman_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function TelesalesWoman(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TELESALES_WOMAN)} />
}
