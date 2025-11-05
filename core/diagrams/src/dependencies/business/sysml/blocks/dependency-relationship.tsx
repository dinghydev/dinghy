import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEPENDENCY_RELATIONSHIP = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=bottom;',
  },
}

export function DependencyRelationship(props: NodeProps) {
  return (
    <Dependency
      {...DEPENDENCY_RELATIONSHIP}
      {...props}
      _style={extendStyle(DEPENDENCY_RELATIONSHIP, props)}
    />
  )
}
