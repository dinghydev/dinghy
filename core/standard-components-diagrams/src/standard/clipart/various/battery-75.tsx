import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BATTERY_75 = {
  _style: 'image;html=1;image=img/lib/clip_art/general/Battery_75_128x128.png',
  _width: 80,
  _height: 80,
}

export function Battery75(props: DiagramNodeProps) {
  return <Shape {...BATTERY_75} {...props} />
}
