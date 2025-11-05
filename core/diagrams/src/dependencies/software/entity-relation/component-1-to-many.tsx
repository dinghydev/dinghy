import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_1_TO_MANY = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;',
  },
}

export function Component1ToMany(props: NodeProps) {
  return (
    <Dependency
      {...COMPONENT_1_TO_MANY}
      {...props}
      _style={extendStyle(COMPONENT_1_TO_MANY, props)}
    />
  )
}
