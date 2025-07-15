import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SORT = {
  _style: 'shape=sortShape;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;',
  _width: 80,
  _height: 80,
}

export function Sort(props: DiagramNodeProps) {
  return <Shape {...SORT} {...props} />
}
