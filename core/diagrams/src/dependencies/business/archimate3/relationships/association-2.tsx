import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ASSOCIATION_2 = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;html=1;endArrow=openAsync;elbow=vertical;rounded=0;endFill=0;',
  },
}

export function Association2(props: DiagramNodeProps) {
  return (
    <Dependency
      {...ASSOCIATION_2}
      {...props}
      _style={extendStyle(ASSOCIATION_2, props)}
    />
  )
}
