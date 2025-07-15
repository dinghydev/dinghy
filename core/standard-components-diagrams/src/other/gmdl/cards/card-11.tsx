import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CARD_11 = {
  _style:
    'shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;whiteSpace=wrap;html=1;',
  _width: 342,
  _height: 272,
}

export function Card11(props: DiagramNodeProps) {
  return <Shape {...CARD_11} {...props} />
}
