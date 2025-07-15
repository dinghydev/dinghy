import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETWORK_2 = {
  _style: 'image;html=1;image=img/lib/clip_art/computers/Network_2_128x128.png',
  _width: 80,
  _height: 80,
}

export function Network2(props: DiagramNodeProps) {
  return <Shape {...NETWORK_2} {...props} />
}
