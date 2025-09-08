import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REQUIREMENT_CONTAINMENT_RELATIONSHIP_2 = {
  _style: {
    entity:
      'rounded=0;html=1;labelBackgroundColor=none;endArrow=none;edgeStyle=elbowEdgeStyle;elbow=vertical;startArrow=sysMLPackCont;startSize=12;',
  },
  _original_width: 3,
  _original_height: 180,
}

export function RequirementContainmentRelationship2(props: DiagramNodeProps) {
  return (
    <Shape
      {...REQUIREMENT_CONTAINMENT_RELATIONSHIP_2}
      {...props}
      _style={extendStyle(REQUIREMENT_CONTAINMENT_RELATIONSHIP_2, props)}
    />
  )
}
