import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURE_SYSTEM = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Secure_System_128x128.png',
  _width: 80,
  _height: 80,
}

export function SecureSystem(props: DiagramNodeProps) {
  return <Shape {...SECURE_SYSTEM} {...props} />
}
