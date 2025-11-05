import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IPHONE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/telecommunication/iPhone_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Iphone(props: NodeProps) {
  return <Shape {...IPHONE} {...props} _style={extendStyle(IPHONE, props)} />
}
