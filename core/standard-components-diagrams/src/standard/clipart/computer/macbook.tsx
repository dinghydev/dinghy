import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MACBOOK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/MacBook_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Macbook(props: DiagramNodeProps) {
  return <Shape {...MACBOOK} {...props} _style={extendStyle(MACBOOK, props)} />
}
