import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CAMERA = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Ip_Camera_128x128.png',
  _width: 80,
  _height: 80,
}

export function Camera(props: DiagramNodeProps) {
  return <Shape {...CAMERA} {...props} />
}
