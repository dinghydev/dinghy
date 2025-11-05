import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DECISION_ENTITY_RELATIONSHIP = {
  _style: {
    entity:
      'shape=rhombus;html=1;dashed=0;whiteSpace=wrap;perimeter=rhombusPerimeter;',
  },
  _original_width: 60,
  _original_height: 50,
}

export function DecisionEntityRelationship(props: NodeProps) {
  return (
    <Shape
      {...DECISION_ENTITY_RELATIONSHIP}
      {...props}
      _style={extendStyle(DECISION_ENTITY_RELATIONSHIP, props)}
    />
  )
}
