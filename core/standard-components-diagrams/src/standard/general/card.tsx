import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CARD = {
  _style: 'shape=card;whiteSpace=wrap;html=1;',
  _width: 80,
  _height: 100,
}

export function Card(props: DiagramNodeProps) {
  return <Shape {...CARD} {...props} />
}
