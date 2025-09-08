import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATABASE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Database_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Database(props: DiagramNodeProps) {
  return (
    <Shape {...DATABASE} {...props} _style={extendStyle(DATABASE, props)} />
  )
}
