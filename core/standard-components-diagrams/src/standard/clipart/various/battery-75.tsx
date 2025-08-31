import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BATTERY_75 = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Battery_75_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Battery75(props: DiagramNodeProps) {
  return (
    <Shape {...BATTERY_75} {...props} _style={extendStyle(BATTERY_75, props)} />
  )
}
