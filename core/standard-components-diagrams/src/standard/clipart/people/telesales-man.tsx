import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TELESALES_MAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Telesales_Man_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function TelesalesMan(props: DiagramNodeProps) {
  return (
    <Shape
      {...TELESALES_MAN}
      {...props}
      _style={extendStyle(TELESALES_MAN, props)}
    />
  )
}
