import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECURITY_WOMAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Security_Woman_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
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
