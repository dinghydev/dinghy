import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CERTIFICATE = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Certificate_128x128.png',
  _width: 80,
  _height: 80,
}

export function Certificate(props: DiagramNodeProps) {
  return <Shape {...CERTIFICATE} {...props} />
}
