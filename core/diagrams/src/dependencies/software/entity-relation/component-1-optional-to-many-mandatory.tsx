import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_1_OPTIONAL_TO_MANY_MANDATORY = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;startArrow=ERzeroToOne;',
  },
}

export function Component1OptionalToManyMandatory(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, COMPONENT_1_OPTIONAL_TO_MANY_MANDATORY)}
    />
  )
}
