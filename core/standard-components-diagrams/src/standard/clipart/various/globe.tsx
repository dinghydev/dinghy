import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GLOBE = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Earth_globe_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Globe(props: DiagramNodeProps) {
  return <Shape {...GLOBE} {...props} _style={extendStyle(GLOBE, props)} />
}
