import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RELATIONSHIP = {
  _style:
    'shape=rhombus;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;align=center;',
  _width: 120,
  _height: 60,
}

export function Relationship(props: DiagramNodeProps) {
  return <Shape {...RELATIONSHIP} {...props} />
}
