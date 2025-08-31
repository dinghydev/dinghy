import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CELLPHONE = {
  _style:
    'image;html=1;image=img/lib/clip_art/telecommunication/Cellphone_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Cellphone(props: DiagramNodeProps) {
  return (
    <Shape {...CELLPHONE} {...props} _style={extendStyle(CELLPHONE, props)} />
  )
}
