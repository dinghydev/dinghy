import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOUBLE_ROUNDED_RECTANGLE = {
  _style: 'shape=ext;double=1;rounded=1;whiteSpace=wrap;html=1;',
  _width: 120,
  _height: 80,
}

export function DoubleRoundedRectangle(props: DiagramNodeProps) {
  return <Shape {...DOUBLE_ROUNDED_RECTANGLE} {...props} />
}
