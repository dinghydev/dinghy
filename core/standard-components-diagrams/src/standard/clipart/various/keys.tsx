import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const KEYS = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Keys_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Keys(props: DiagramNodeProps) {
  return <Shape {...KEYS} {...props} _style={extendStyle(KEYS, props)} />
}
