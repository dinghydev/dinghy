import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CIRCLE = {
  _style: 'ellipse;whiteSpace=wrap;html=1;aspect=fixed;',
  _width: 80,
  _height: 80,
}

export function Circle(props: DiagramNodeProps) {
  return <Shape {...CIRCLE} {...props} />
}
