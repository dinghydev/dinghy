import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECURITY_WOMAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Security_Woman_Black_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function SecurityWomanBlack(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURITY_WOMAN_BLACK}
      {...props}
      _style={extendStyle(SECURITY_WOMAN_BLACK, props)}
    />
  )
}
