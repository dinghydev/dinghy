import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURITY_MAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Security_Man_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function SecurityMan(props: DiagramNodeProps) {
  return <Shape {...SECURITY_MAN} {...props} />
}
