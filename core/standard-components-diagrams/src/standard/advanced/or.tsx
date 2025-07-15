import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OR = {
  _style:
    'shape=orEllipse;perimeter=ellipsePerimeter;whiteSpace=wrap;html=1;backgroundOutline=1;',
  _width: 80,
  _height: 80,
}

export function Or(props: DiagramNodeProps) {
  return <Shape {...OR} {...props} />
}
