import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USB_HUB = {
  _style: 'image;html=1;image=img/lib/clip_art/computers/USB_Hub_128x128.png',
  _width: 80,
  _height: 80,
}

export function UsbHub(props: DiagramNodeProps) {
  return <Shape {...USB_HUB} {...props} />
}
