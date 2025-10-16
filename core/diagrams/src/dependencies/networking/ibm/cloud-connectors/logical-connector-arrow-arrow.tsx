import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOGICAL_CONNECTOR_ARROW_ARROW = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=block;endArrow=block;startFill=1;endFill=1;strokeWidth=2;dashed=1;',
  },
}

export function LogicalConnectorArrowArrow(props: DiagramNodeProps) {
  return (
    <Dependency
      {...LOGICAL_CONNECTOR_ARROW_ARROW}
      {...props}
      _style={extendStyle(LOGICAL_CONNECTOR_ARROW_ARROW, props)}
    />
  )
}
