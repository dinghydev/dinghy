import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IDENTIFYING_RELATIONSHIP = {
  _style: {
    entity:
      'shape=rhombus;double=1;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;align=center;',
  },
  _original_width: 120,
  _original_height: 60,
}

export function IdentifyingRelationship(props: DiagramNodeProps) {
  return (
    <Shape
      {...IDENTIFYING_RELATIONSHIP}
      {...props}
      _style={extendStyle(IDENTIFYING_RELATIONSHIP, props)}
    />
  )
}
