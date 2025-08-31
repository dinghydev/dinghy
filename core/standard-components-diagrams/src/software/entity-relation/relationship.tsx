import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RELATIONSHIP = {
  _style: {
    entity:
      'shape=rhombus;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;align=center;',
  },
  _width: 120,
  _height: 60,
}

export function Relationship(props: DiagramNodeProps) {
  return (
    <Shape
      {...RELATIONSHIP}
      {...props}
      _style={extendStyle(RELATIONSHIP, props)}
    />
  )
}
