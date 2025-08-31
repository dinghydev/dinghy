import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WIRELESS_ROUTER_N = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Wireless_Router_N_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function WirelessRouterN(props: DiagramNodeProps) {
  return (
    <Shape
      {...WIRELESS_ROUTER_N}
      {...props}
      _style={extendStyle(WIRELESS_ROUTER_N, props)}
    />
  )
}
