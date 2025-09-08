import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BATTERY_100 = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Battery_100_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Battery100(props: DiagramNodeProps) {
  return (
    <Shape
      {...BATTERY_100}
      {...props}
      _style={extendStyle(BATTERY_100, props)}
    />
  )
}
