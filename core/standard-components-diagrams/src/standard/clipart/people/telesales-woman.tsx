import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TELESALES_WOMAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Telesales_Woman_128x128.png',
  _width: 80,
  _height: 80,
}

export function TelesalesWoman(props: DiagramNodeProps) {
  return <Shape {...TELESALES_WOMAN} {...props} />
}
