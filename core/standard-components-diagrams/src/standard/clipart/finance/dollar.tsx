import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOLLAR = {
  _style: 'image;html=1;image=img/lib/clip_art/finance/Dollar_128x128.png',
  _width: 80,
  _height: 80,
}

export function Dollar(props: DiagramNodeProps) {
  return <Shape {...DOLLAR} {...props} />
}
