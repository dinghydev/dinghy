import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DECISION_ENTITY_RELATIONSHIP = {
  _style:
    'shape=rhombus;html=1;dashed=0;whiteSpace=wrap;perimeter=rhombusPerimeter;',
  _width: 60,
  _height: 50,
}

export function DecisionEntityRelationship(props: DiagramNodeProps) {
  return <Shape {...DECISION_ENTITY_RELATIONSHIP} {...props} />
}
