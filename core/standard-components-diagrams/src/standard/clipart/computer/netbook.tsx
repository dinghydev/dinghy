import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETBOOK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Netbook_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Netbook(props: DiagramNodeProps) {
  return <Shape {...NETBOOK} {...props} _style={extendStyle(NETBOOK, props)} />
}
