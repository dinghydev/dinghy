import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETBOOK = {
  _style: 'image;html=1;image=img/lib/clip_art/computers/Netbook_128x128.png',
  _width: 80,
  _height: 80,
}

export function Netbook(props: DiagramNodeProps) {
  return <Shape {...NETBOOK} {...props} />
}
