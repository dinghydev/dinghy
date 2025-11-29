import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REQUIREMENT_CONTAINMENT_RELATIONSHIP_2 = {
  _style: {
    entity:
      'rounded=0;html=1;labelBackgroundColor=none;endArrow=none;edgeStyle=elbowEdgeStyle;elbow=vertical;startArrow=sysMLPackCont;startSize=12;',
  },
  _width: 3,
  _height: 180,
}

export function RequirementContainmentRelationship2(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, REQUIREMENT_CONTAINMENT_RELATIONSHIP_2)}
    />
  )
}
