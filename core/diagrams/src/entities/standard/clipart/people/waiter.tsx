import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WAITER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Waiter_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Waiter(props: DiagramNodeProps) {
  return <Shape {...WAITER} {...props} _style={extendStyle(WAITER, props)} />
}
