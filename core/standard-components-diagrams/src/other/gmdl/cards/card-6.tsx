import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CARD_6 = {
  _style:
    'shape=rect;fillColor=#BDBDBD;strokeColor=#eeeeee;shadow=1;html=1;whiteSpace=wrap;',
  _width: 342,
  _height: 246,
}

export function Card6(props: DiagramNodeProps) {
  return <Shape {...CARD_6} {...props} />
}
