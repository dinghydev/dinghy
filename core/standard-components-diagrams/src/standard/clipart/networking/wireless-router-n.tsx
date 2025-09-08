import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WIRELESS_ROUTER_N = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Wireless_Router_N_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
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
