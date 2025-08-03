import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIREWALL = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Firewall-page1_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Firewall(props: DiagramNodeProps) {
  return <Shape {...FIREWALL} {...props} />
}
