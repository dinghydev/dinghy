import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEPENDENCY_RELATIONSHIP = {
  _style: {
    dependency: 'endArrow=open;endSize=12;dashed=1;html=1;',
  },
}

export function DependencyRelationship(props: DiagramNodeProps) {
  return (
    <Dependency
      {...DEPENDENCY_RELATIONSHIP}
      {...props}
      _style={extendStyle(DEPENDENCY_RELATIONSHIP, props)}
    />
  )
}
