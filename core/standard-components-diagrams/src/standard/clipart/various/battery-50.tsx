import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BATTERY_50 = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Battery_50_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Battery50(props: DiagramNodeProps) {
  return (
    <Shape {...BATTERY_50} {...props} _style={extendStyle(BATTERY_50, props)} />
  )
}
