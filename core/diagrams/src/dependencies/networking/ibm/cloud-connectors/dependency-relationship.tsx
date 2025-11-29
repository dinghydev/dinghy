import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEPENDENCY_RELATIONSHIP = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=open;dashed=1;strokeWidth=1;',
  },
}

export function DependencyRelationship(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, DEPENDENCY_RELATIONSHIP)}
    />
  )
}
