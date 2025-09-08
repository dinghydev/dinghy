import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT_0_TO_MANY_OPTIONAL = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToMany;endFill=1;',
  },
}

export function Component0ToManyOptional(props: DiagramNodeProps) {
  return (
    <Dependency
      {...COMPONENT_0_TO_MANY_OPTIONAL}
      {...props}
      _style={extendStyle(COMPONENT_0_TO_MANY_OPTIONAL, props)}
    />
  )
}
