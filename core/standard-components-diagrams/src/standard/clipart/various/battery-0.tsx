import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BATTERY_0 = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Battery_0_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Battery0(props: DiagramNodeProps) {
  return (
    <Shape {...BATTERY_0} {...props} _style={extendStyle(BATTERY_0, props)} />
  )
}
