import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIREWALL_2 = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Firewall_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Firewall2(props: DiagramNodeProps) {
  return (
    <Shape {...FIREWALL_2} {...props} _style={extendStyle(FIREWALL_2, props)} />
  )
}
