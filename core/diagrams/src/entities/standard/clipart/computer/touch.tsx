import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TOUCH = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Touch_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Touch(props: NodeProps) {
  return <Shape {...TOUCH} {...props} _style={extendStyle(TOUCH, props)} />
}
