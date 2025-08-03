import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BATTERY_50 = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Battery_50_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Battery50(props: DiagramNodeProps) {
  return <Shape {...BATTERY_50} {...props} />
}
