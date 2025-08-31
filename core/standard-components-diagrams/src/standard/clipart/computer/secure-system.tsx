import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECURE_SYSTEM = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Secure_System_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function SecureSystem(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURE_SYSTEM}
      {...props}
      _style={extendStyle(SECURE_SYSTEM, props)}
    />
  )
}
