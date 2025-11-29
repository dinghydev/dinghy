import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANY_OPTIONAL_TO_MANY_MANDATORY = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;startArrow=ERzeroToMany;',
  },
}

export function ManyOptionalToManyMandatory(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, MANY_OPTIONAL_TO_MANY_MANDATORY)}
    />
  )
}
