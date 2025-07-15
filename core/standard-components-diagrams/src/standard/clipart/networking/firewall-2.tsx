import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIREWALL_2 = {
  _style: 'image;html=1;image=img/lib/clip_art/networking/Firewall_128x128.png',
  _width: 80,
  _height: 80,
}

export function Firewall2(props: DiagramNodeProps) {
  return <Shape {...FIREWALL_2} {...props} />
}
