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
      {...props}
      _style={extendStyle(props, COMPONENT_0_TO_MANY_OPTIONAL)}
    />
  )
}
