import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRINT_SERVER_WIRELESS = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Print_Server_Wireless_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function PrintServerWireless(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRINT_SERVER_WIRELESS}
      {...props}
      _style={extendStyle(PRINT_SERVER_WIRELESS, props)}
    />
  )
}
