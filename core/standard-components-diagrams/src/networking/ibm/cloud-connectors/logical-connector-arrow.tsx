import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOGICAL_CONNECTOR_ARROW = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=block;endFill=1;strokeWidth=2;dashed=1;',
  },
}

export function LogicalConnectorArrow(props: DiagramNodeProps) {
  return (
    <Dependency
      {...LOGICAL_CONNECTOR_ARROW}
      {...props}
      _style={extendStyle(LOGICAL_CONNECTOR_ARROW, props)}
    />
  )
}
