import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TIRE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Tire_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Tire(props: NodeProps) {
  return <Shape {...TIRE} {...props} _style={extendStyle(TIRE, props)} />
}
