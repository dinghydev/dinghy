import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELBOW_CONNECTOR = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;rounded=0;elbow=vertical;html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;strokeWidth=1;fontSize=14;endArrow=none;endFill=0;',
  },
}

export function ElbowConnector(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, ELBOW_CONNECTOR)} />
}
