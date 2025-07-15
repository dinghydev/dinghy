import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SQUARE = {
  _style: 'whiteSpace=wrap;html=1;aspect=fixed;',
  _width: 80,
  _height: 80,
}

export function Square(props: DiagramNodeProps) {
  return <Shape {...SQUARE} {...props} />
}
