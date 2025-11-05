import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BATTERY_50 = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Battery_50_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Battery50(props: NodeProps) {
  return (
    <Shape {...BATTERY_50} {...props} _style={extendStyle(BATTERY_50, props)} />
  )
}
