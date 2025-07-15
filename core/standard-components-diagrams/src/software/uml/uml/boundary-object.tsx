import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BOUNDARY_OBJECT = {
  _style: 'shape=umlBoundary;whiteSpace=wrap;html=1;',
  _width: 100,
  _height: 80,
}

export function BoundaryObject(props: DiagramNodeProps) {
  return <Shape {...BOUNDARY_OBJECT} {...props} />
}
