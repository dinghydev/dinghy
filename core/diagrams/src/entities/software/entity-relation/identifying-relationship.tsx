import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IDENTIFYING_RELATIONSHIP = {
  _style: {
    entity:
      'shape=rhombus;double=1;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;align=center;',
  },
  _width: 120,
  _height: 60,
}

export function IdentifyingRelationship(props: NodeProps) {
  return (
    <Shape
      {...IDENTIFYING_RELATIONSHIP}
      {...props}
      _style={extendStyle(IDENTIFYING_RELATIONSHIP, props)}
    />
  )
}
