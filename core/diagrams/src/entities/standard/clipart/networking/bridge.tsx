import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BRIDGE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Bridge_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Bridge(props: NodeProps) {
  return <Shape {...BRIDGE} {...props} _style={extendStyle(BRIDGE, props)} />
}
