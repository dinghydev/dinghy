import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECURITY_MAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Security_Man_Black_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function SecurityManBlack(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURITY_MAN_BLACK}
      {...props}
      _style={extendStyle(SECURITY_MAN_BLACK, props)}
    />
  )
}
