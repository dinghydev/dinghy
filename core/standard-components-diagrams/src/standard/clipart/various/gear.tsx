import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GEAR = {
  _style: 'image;html=1;image=img/lib/clip_art/general/Gear_128x128.png',
  _width: 80,
  _height: 80,
}

export function Gear(props: DiagramNodeProps) {
  return <Shape {...GEAR} {...props} />
}
