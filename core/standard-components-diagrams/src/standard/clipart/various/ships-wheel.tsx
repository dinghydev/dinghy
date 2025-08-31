import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHIPS_WHEEL = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Ships_Wheel_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
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
