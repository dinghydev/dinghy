import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELLIPSE = {
  _style: 'ellipse;whiteSpace=wrap;html=1;',
  _width: 120,
  _height: 80,
}

export function Ellipse(props: DiagramNodeProps) {
  return <Shape {...ELLIPSE} {...props} />
}
