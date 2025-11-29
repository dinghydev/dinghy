import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARROW_UP = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/finance/Arrow_Up_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function ArrowUp(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARROW_UP)} />
}
