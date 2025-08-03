import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIREWALL_1 = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Firewall_02_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Firewall1(props: DiagramNodeProps) {
  return <Shape {...FIREWALL_1} {...props} />
}
