import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOUBLE_ARROW = {
  _style: 'shape=doubleArrow;whiteSpace=wrap;html=1;',
  _width: 100,
  _height: 60,
}

export function DoubleArrow(props: DiagramNodeProps) {
  return <Shape {...DOUBLE_ARROW} {...props} />
}
