import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IPAD = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/iPad_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Ipad(props: NodeProps) {
  return <Shape {...IPAD} {...props} _style={extendStyle(IPAD, props)} />
}
