import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STYLUS = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Stylus_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Stylus(props: DiagramNodeProps) {
  return <Shape {...STYLUS} {...props} _style={extendStyle(STYLUS, props)} />
}
