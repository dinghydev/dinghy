import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TELESALES_MAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Telesales_Man_Black_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function TelesalesManBlack(props: DiagramNodeProps) {
  return (
    <Shape
      {...TELESALES_MAN_BLACK}
      {...props}
      _style={extendStyle(TELESALES_MAN_BLACK, props)}
    />
  )
}
