import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHIPS_WHEEL = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Ships_Wheel_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function ShipsWheel(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHIPS_WHEEL}
      {...props}
      _style={extendStyle(SHIPS_WHEEL, props)}
    />
  )
}
