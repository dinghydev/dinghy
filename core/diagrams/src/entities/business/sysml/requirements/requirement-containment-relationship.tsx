import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REQUIREMENT_CONTAINMENT_RELATIONSHIP = {
  _style: {
    entity: 'shape=rect;html=1;whiteSpace=wrap;align=center;',
  },
  _width: 300,
  _height: 180,
}

export function RequirementContainmentRelationship(props: NodeProps) {
  return (
    <Shape
      {...REQUIREMENT_CONTAINMENT_RELATIONSHIP}
      {...props}
      _style={extendStyle(REQUIREMENT_CONTAINMENT_RELATIONSHIP, props)}
    />
  )
}
