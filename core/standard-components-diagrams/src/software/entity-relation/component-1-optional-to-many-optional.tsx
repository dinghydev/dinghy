import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT_1_OPTIONAL_TO_MANY_OPTIONAL = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToMany;startArrow=ERzeroToOne;',
  },
}

export function Component1OptionalToManyOptional(props: DiagramNodeProps) {
  return (
    <Dependency
      {...COMPONENT_1_OPTIONAL_TO_MANY_OPTIONAL}
      {...props}
      _style={extendStyle(COMPONENT_1_OPTIONAL_TO_MANY_OPTIONAL, props)}
    />
  )
}
