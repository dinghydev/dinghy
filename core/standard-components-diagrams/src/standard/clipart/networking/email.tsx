import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EMAIL = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Email_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Email(props: DiagramNodeProps) {
  return <Shape {...EMAIL} {...props} _style={extendStyle(EMAIL, props)} />
}
