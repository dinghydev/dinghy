import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BATTERY_0 = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Battery_0_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Battery0(props: NodeProps) {
  return (
    <Shape {...BATTERY_0} {...props} _style={extendStyle(BATTERY_0, props)} />
  )
}
