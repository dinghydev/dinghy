import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUM = {
  _style:
    'shape=sumEllipse;perimeter=ellipsePerimeter;whiteSpace=wrap;html=1;backgroundOutline=1;',
  _width: 80,
  _height: 80,
}

export function Sum(props: DiagramNodeProps) {
  return <Shape {...SUM} {...props} />
}
