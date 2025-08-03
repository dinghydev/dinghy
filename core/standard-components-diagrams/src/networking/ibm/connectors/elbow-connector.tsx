import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELBOW_CONNECTOR = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;rounded=0;elbow=vertical;html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;strokeWidth=1;fontSize=14;endArrow=none;endFill=0;',
  },
}

export function ElbowConnector(props: DiagramNodeProps) {
  return <Dependency {...ELBOW_CONNECTOR} {...props} />
}
