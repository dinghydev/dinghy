import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEPENDENCY_RELATIONSHIP = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=bottom;',
  },
}

export function DependencyRelationship(props: DiagramNodeProps) {
  return <Dependency {...DEPENDENCY_RELATIONSHIP} {...props} />
}
