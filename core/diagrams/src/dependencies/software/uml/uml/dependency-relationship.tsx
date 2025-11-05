import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEPENDENCY_RELATIONSHIP = {
  _style: {
    dependency: 'endArrow=open;endSize=12;dashed=1;html=1;',
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
