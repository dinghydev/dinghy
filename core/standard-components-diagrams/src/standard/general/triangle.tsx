import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRIANGLE = {
  _style: 'triangle;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 80,
}

export function Triangle(props: DiagramNodeProps) {
  return <Shape {...TRIANGLE} {...props} />
}
