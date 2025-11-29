import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_1_MANDATORY_TO_MANY_OPTIONAL = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToMany;startArrow=ERmandOne;',
  },
}

export function Component1MandatoryToManyOptional(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, COMPONENT_1_MANDATORY_TO_MANY_OPTIONAL)}
    />
  )
}
