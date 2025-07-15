import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REQUIREMENT_CONTAINMENT_RELATIONSHIP_2 = {
  _style:
    'rounded=0;html=1;labelBackgroundColor=none;endArrow=none;edgeStyle=elbowEdgeStyle;elbow=vertical;startArrow=sysMLPackCont;startSize=12;',
  _width: 3,
  _height: 180,
}

export function RequirementContainmentRelationship2(props: DiagramNodeProps) {
  return <Shape {...REQUIREMENT_CONTAINMENT_RELATIONSHIP_2} {...props} />
}
