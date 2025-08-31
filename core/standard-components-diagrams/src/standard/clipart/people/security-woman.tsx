import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECURITY_WOMAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Security_Woman_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function SecurityWoman(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURITY_WOMAN}
      {...props}
      _style={extendStyle(SECURITY_WOMAN, props)}
    />
  )
}
