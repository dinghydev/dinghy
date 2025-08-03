import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WIRELESS_ROUTER = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Wireless_Router_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function WirelessRouter(props: DiagramNodeProps) {
  return <Shape {...WIRELESS_ROUTER} {...props} />
}
