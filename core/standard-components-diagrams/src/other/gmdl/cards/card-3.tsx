import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CARD_3 = {
  _style: 'shape=rect;fillColor=#BDBDBD;strokeColor=#eeeeee;shadow=1;html=1;',
  _width: 342,
  _height: 378,
}

export function Card3(props: DiagramNodeProps) {
  return <Shape {...CARD_3} {...props} />
}
