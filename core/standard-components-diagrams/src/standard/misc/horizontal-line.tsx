import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HORIZONTAL_LINE = {
  _style: 'line;strokeWidth=2;html=1;',
  _width: 160,
  _height: 10,
}

export function HorizontalLine(props: DiagramNodeProps) {
  return <Shape {...HORIZONTAL_LINE} {...props} />
}
