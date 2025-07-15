import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRIVATE_CONNECTOR_CIRCLE_CIRCLE = {
  _style:
    'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=oval;endArrow=oval;strokeWidth=2;startFill=1;endFill=1;sourcePerimeterSpacing=3;targetPerimeterSpacing=3;strokeColor=#198038;',
  _width: 48,
  _height: 48,
}

export function PrivateConnectorCircleCircle(props: DiagramNodeProps) {
  return <Dependency {...PRIVATE_CONNECTOR_CIRCLE_CIRCLE} {...props} />
}
