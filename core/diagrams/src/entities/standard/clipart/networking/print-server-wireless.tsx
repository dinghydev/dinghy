import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRINT_SERVER_WIRELESS = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Print_Server_Wireless_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function PrintServerWireless(props: NodeProps) {
  return (
    <Shape
      {...PRINT_SERVER_WIRELESS}
      {...props}
      _style={extendStyle(PRINT_SERVER_WIRELESS, props)}
    />
  )
}
