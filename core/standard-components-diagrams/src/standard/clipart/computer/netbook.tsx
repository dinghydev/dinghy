import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETBOOK = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Netbook_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Netbook(props: DiagramNodeProps) {
  return <Shape {...NETBOOK} {...props} _style={extendStyle(NETBOOK, props)} />
}
