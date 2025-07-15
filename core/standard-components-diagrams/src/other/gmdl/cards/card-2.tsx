import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CARD_2 = {
  _style: 'shape=rect;fillColor=#BDBDBD;strokeColor=#BDBDBD;shadow=1;',
  _width: 0,
  _height: 230,
}

export function Card2(props: DiagramNodeProps) {
  return <Shape {...CARD_2} {...props} />
}
