import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELBOW_CONNECTOR_DOUBLE_ARROW = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;rounded=0;elbow=vertical;html=1;labelBackgroundColor=#ffffff;startArrow=classic;startFill=1;startSize=6;endArrow=classic;endFill=1;endSize=6;jettySize=auto;orthogonalLoop=1;strokeWidth=1;fontSize=14;',
  },
}

export function ElbowConnectorDoubleArrow(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, ELBOW_CONNECTOR_DOUBLE_ARROW)}
    />
  )
}
