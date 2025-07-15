import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REQUIREMENT_CONTAINMENT_RELATIONSHIP = {
  _style: 'shape=rect;html=1;whiteSpace=wrap;align=center;',
  _width: 300,
  _height: 180,
}

export function RequirementContainmentRelationship(props: DiagramNodeProps) {
  return <Shape {...REQUIREMENT_CONTAINMENT_RELATIONSHIP} {...props} />
}
