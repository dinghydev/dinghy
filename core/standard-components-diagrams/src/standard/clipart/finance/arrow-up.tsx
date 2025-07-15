import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW_UP = {
  _style: 'image;html=1;image=img/lib/clip_art/finance/Arrow_Up_128x128.png',
  _width: 80,
  _height: 80,
}

export function ArrowUp(props: DiagramNodeProps) {
  return <Shape {...ARROW_UP} {...props} />
}
