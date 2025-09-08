import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOCK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Lock_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Lock(props: DiagramNodeProps) {
  return <Shape {...LOCK} {...props} _style={extendStyle(LOCK, props)} />
}
