import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURITY_WOMAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Security_Woman_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function SecurityWoman(props: DiagramNodeProps) {
  return <Shape {...SECURITY_WOMAN} {...props} />
}
