import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BATTERY = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Battery_allstates_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Battery(props: DiagramNodeProps) {
  return <Shape {...BATTERY} {...props} _style={extendStyle(BATTERY, props)} />
}
