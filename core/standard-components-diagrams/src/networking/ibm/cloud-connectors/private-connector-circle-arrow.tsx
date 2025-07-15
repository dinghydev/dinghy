import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRIVATE_CONNECTOR_CIRCLE_ARROW = {
  _style:
    'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=oval;endArrow=block;strokeWidth=2;startFill=1;endFill=1;strokeColor=#198038;',
  _width: 48,
  _height: 48,
}

export function PrivateConnectorCircleArrow(props: DiagramNodeProps) {
  return <Dependency {...PRIVATE_CONNECTOR_CIRCLE_ARROW} {...props} />
}
