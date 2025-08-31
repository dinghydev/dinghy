import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DECISION_ENTITY_RELATIONSHIP = {
  _style: {
    entity:
      'shape=rhombus;html=1;dashed=0;whiteSpace=wrap;perimeter=rhombusPerimeter;',
  },
  _width: 60,
  _height: 50,
}

export function DecisionEntityRelationship(props: DiagramNodeProps) {
  return (
    <Shape
      {...DECISION_ENTITY_RELATIONSHIP}
      {...props}
      _style={extendStyle(DECISION_ENTITY_RELATIONSHIP, props)}
    />
  )
}
