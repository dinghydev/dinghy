import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRINT_SERVER_WIRELESS = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Print_Server_Wireless_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function PrintServerWireless(props: DiagramNodeProps) {
  return <Shape {...PRINT_SERVER_WIRELESS} {...props} />
}
