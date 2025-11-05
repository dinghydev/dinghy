import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_0_TO_MANY_OPTIONAL = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToMany;endFill=1;',
  },
}

export function Component0ToManyOptional(props: NodeProps) {
  return (
    <Dependency
      {...COMPONENT_0_TO_MANY_OPTIONAL}
      {...props}
      _style={extendStyle(COMPONENT_0_TO_MANY_OPTIONAL, props)}
    />
  )
}
