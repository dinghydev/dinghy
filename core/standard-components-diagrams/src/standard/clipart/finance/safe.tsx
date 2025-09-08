import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SAFE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/finance/Safe_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Safe(props: DiagramNodeProps) {
  return <Shape {...SAFE} {...props} _style={extendStyle(SAFE, props)} />
}
