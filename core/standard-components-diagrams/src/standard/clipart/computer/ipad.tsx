import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IPAD = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/iPad_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Ipad(props: DiagramNodeProps) {
  return <Shape {...IPAD} {...props} _style={extendStyle(IPAD, props)} />
}
