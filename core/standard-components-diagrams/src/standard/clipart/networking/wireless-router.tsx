import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WIRELESS_ROUTER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Wireless_Router_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function WirelessRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...WIRELESS_ROUTER}
      {...props}
      _style={extendStyle(WIRELESS_ROUTER, props)}
    />
  )
}
