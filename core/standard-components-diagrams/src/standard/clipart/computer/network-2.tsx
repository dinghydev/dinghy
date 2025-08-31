import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETWORK_2 = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Network_2_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Network2(props: DiagramNodeProps) {
  return (
    <Shape {...NETWORK_2} {...props} _style={extendStyle(NETWORK_2, props)} />
  )
}
