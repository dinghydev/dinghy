import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEPENDENCY_RELATIONSHIP = {
  _style: {
    dependency: 'endArrow=open;endSize=12;dashed=1;html=1;',
  },
}

export function DependencyRelationship(props: DiagramNodeProps) {
  return <Dependency {...DEPENDENCY_RELATIONSHIP} {...props} />
}
