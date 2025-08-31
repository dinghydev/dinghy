import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IPHONE = {
  _style:
    'image;html=1;image=img/lib/clip_art/telecommunication/iPhone_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Iphone(props: DiagramNodeProps) {
  return <Shape {...IPHONE} {...props} _style={extendStyle(IPHONE, props)} />
}
