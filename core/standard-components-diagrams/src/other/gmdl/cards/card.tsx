import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CARD = {
  _style: 'shape=rect;fillColor=#ffffff;strokeColor=none;shadow=1;',
  _width: 342,
  _height: 356,
}

export function Card(props: DiagramNodeProps) {
  return <Shape {...CARD} {...props} />
}
