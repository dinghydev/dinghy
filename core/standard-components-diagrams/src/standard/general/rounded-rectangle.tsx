import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROUNDED_RECTANGLE = {
  _style: 'rounded=1;whiteSpace=wrap;html=1;',
  _width: 120,
  _height: 60,
}

export function RoundedRectangle(props: DiagramNodeProps) {
  return <Shape {...ROUNDED_RECTANGLE} {...props} />
}
