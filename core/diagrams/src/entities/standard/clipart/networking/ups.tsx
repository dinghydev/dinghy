import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const UPS = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/UPS_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Ups(props: NodeProps) {
  return <Shape {...UPS} {...props} _style={extendStyle(UPS, props)} />
}
