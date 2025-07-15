import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTROL_OPERATOR = {
  _style: 'shape=rect;rounded=1;html=1;whiteSpace=wrap;align=center;',
  _width: 160,
  _height: 80,
}

export function ControlOperator(props: DiagramNodeProps) {
  return <Shape {...CONTROL_OPERATOR} {...props} />
}
