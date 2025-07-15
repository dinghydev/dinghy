import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CELLPHONE = {
  _style:
    'image;html=1;image=img/lib/clip_art/telecommunication/Cellphone_128x128.png',
  _width: 80,
  _height: 80,
}

export function Cellphone(props: DiagramNodeProps) {
  return <Shape {...CELLPHONE} {...props} />
}
