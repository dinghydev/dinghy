import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STAR = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Star_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Star(props: NodeProps) {
  return <Shape {...STAR} {...props} _style={extendStyle(STAR, props)} />
}
