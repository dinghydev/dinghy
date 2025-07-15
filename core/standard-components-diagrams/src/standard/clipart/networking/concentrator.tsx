import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONCENTRATOR = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Concentrator_128x128.png',
  _width: 80,
  _height: 80,
}

export function Concentrator(props: DiagramNodeProps) {
  return <Shape {...CONCENTRATOR} {...props} />
}
