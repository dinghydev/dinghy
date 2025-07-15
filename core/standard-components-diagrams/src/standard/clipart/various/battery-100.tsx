import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BATTERY_100 = {
  _style: 'image;html=1;image=img/lib/clip_art/general/Battery_100_128x128.png',
  _width: 80,
  _height: 80,
}

export function Battery100(props: DiagramNodeProps) {
  return <Shape {...BATTERY_100} {...props} />
}
