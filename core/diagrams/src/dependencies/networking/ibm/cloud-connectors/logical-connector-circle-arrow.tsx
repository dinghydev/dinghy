import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOGICAL_CONNECTOR_CIRCLE_ARROW = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=oval;endArrow=block;startFill=1;endFill=1;strokeWidth=2;dashed=1;sourcePerimeterSpacing=3;targetPerimeterSpacing=3;',
  },
}

export function LogicalConnectorCircleArrow(props: NodeProps) {
  return (
    <Dependency
      {...LOGICAL_CONNECTOR_CIRCLE_ARROW}
      {...props}
      _style={extendStyle(LOGICAL_CONNECTOR_CIRCLE_ARROW, props)}
    />
  )
}
