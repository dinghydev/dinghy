import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRAPEZOID = {
  _style:
    'shape=trapezoid;perimeter=trapezoidPerimeter;whiteSpace=wrap;html=1;fixedSize=1;',
  _width: 120,
  _height: 60,
}

export function Trapezoid(props: DiagramNodeProps) {
  return <Shape {...TRAPEZOID} {...props} />
}
