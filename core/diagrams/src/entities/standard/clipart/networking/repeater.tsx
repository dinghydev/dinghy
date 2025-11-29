import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REPEATER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Repeater_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Repeater(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, REPEATER)} />
}
