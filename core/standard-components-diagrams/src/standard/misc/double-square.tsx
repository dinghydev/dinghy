import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOUBLE_SQUARE = {
  _style: 'shape=ext;double=1;whiteSpace=wrap;html=1;aspect=fixed;',
  _width: 80,
  _height: 80,
}

export function DoubleSquare(props: DiagramNodeProps) {
  return <Shape {...DOUBLE_SQUARE} {...props} />
}
