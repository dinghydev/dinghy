import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CARD_4 = {
  _style: 'shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;',
  _width: 344,
  _height: 420,
}

export function Card4(props: DiagramNodeProps) {
  return <Shape {...CARD_4} {...props} />
}
