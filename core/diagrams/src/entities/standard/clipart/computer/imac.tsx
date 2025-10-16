import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IMAC = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/iMac_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Imac(props: DiagramNodeProps) {
  return <Shape {...IMAC} {...props} _style={extendStyle(IMAC, props)} />
}
