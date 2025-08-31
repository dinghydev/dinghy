import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LAPTOP = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Laptop_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Laptop(props: DiagramNodeProps) {
  return <Shape {...LAPTOP} {...props} _style={extendStyle(LAPTOP, props)} />
}
