import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REPEATER = {
  _style: 'image;html=1;image=img/lib/clip_art/networking/Repeater_128x128.png',
  _width: 80,
  _height: 80,
}

export function Repeater(props: DiagramNodeProps) {
  return <Shape {...REPEATER} {...props} />
}
