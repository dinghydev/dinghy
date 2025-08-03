import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELBOW_CONNECTOR_SINGLE_ARROW = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;rounded=0;elbow=vertical;html=1;labelBackgroundColor=#ffffff;endArrow=classic;endFill=1;endSize=6;jettySize=auto;orthogonalLoop=1;strokeWidth=1;fontSize=14;',
  },
}

export function ElbowConnectorSingleArrow(props: DiagramNodeProps) {
  return <Dependency {...ELBOW_CONNECTOR_SINGLE_ARROW} {...props} />
}
