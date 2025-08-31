import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BATTERY_100 = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Battery_100_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
