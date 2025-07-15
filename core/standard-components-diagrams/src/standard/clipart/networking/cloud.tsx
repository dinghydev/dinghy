import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD = {
  _style: 'image;html=1;image=img/lib/clip_art/networking/Cloud_128x128.png',
  _width: 80,
  _height: 80,
}

export function Cloud(props: DiagramNodeProps) {
  return <Shape {...CLOUD} {...props} />
}
