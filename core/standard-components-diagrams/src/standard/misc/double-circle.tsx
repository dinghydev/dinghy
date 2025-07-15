import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOUBLE_CIRCLE = {
  _style: 'ellipse;shape=doubleEllipse;whiteSpace=wrap;html=1;aspect=fixed;',
  _width: 80,
  _height: 80,
}

export function DoubleCircle(props: DiagramNodeProps) {
  return <Shape {...DOUBLE_CIRCLE} {...props} />
}
