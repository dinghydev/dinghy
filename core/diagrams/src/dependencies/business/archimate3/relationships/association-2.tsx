import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASSOCIATION_2 = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;html=1;endArrow=openAsync;elbow=vertical;rounded=0;endFill=0;',
  },
}

export function Association2(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, ASSOCIATION_2)} />
}
