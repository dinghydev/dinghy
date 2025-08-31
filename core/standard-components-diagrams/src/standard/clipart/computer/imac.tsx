import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMAC = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/iMac_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Imac(props: DiagramNodeProps) {
  return <Shape {...IMAC} {...props} _style={extendStyle(IMAC, props)} />
}
