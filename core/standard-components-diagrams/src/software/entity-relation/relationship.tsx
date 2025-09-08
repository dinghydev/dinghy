import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RELATIONSHIP = {
  _style: {
    entity:
      'shape=rhombus;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;align=center;',
  },
  _original_width: 120,
  _original_height: 60,
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
