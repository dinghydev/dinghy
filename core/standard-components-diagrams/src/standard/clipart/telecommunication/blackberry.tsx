import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLACKBERRY = {
  _style:
    'image;html=1;image=img/lib/clip_art/telecommunication/BlackBerry_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Blackberry(props: DiagramNodeProps) {
  return (
    <Shape {...BLACKBERRY} {...props} _style={extendStyle(BLACKBERRY, props)} />
  )
}
