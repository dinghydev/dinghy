import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANY_MANDATORY_TO_MANY_MANDATORY = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;startArrow=ERoneToMany;',
  },
}

export function ManyMandatoryToManyMandatory(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, MANY_MANDATORY_TO_MANY_MANDATORY)}
    />
  )
}
