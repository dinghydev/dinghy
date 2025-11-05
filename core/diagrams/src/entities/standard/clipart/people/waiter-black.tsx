import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WAITER_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Waiter_Black_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function WaiterBlack(props: NodeProps) {
  return (
    <Shape
      {...WAITER_BLACK}
      {...props}
      _style={extendStyle(WAITER_BLACK, props)}
    />
  )
}
