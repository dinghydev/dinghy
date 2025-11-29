import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRIVATE_CONNECTOR_CIRCLE_CIRCLE = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=oval;endArrow=oval;strokeWidth=2;startFill=1;endFill=1;sourcePerimeterSpacing=3;targetPerimeterSpacing=3;strokeColor=#198038;',
  },
}

export function PrivateConnectorCircleCircle(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, PRIVATE_CONNECTOR_CIRCLE_CIRCLE)}
    />
  )
}
