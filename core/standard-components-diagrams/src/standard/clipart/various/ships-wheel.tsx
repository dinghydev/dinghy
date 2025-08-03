import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHIPS_WHEEL = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Ships_Wheel_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function ShipsWheel(props: DiagramNodeProps) {
  return <Shape {...SHIPS_WHEEL} {...props} />
}
