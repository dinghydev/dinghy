import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IPAD = {
  _style: 'image;html=1;image=img/lib/clip_art/computers/iPad_128x128.png',
  _width: 80,
  _height: 80,
}

export function Ipad(props: DiagramNodeProps) {
  return <Shape {...IPAD} {...props} />
}
