import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TELESALES_WOMAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Telesales_Woman_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function TelesalesWoman(props: DiagramNodeProps) {
  return (
    <Shape
      {...TELESALES_WOMAN}
      {...props}
      _style={extendStyle(TELESALES_WOMAN, props)}
    />
  )
}
