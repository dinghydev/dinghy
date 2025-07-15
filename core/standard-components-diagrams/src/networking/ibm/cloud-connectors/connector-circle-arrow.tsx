import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONNECTOR_CIRCLE_ARROW = {
  _style:
    'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=oval;endArrow=block;strokeWidth=2;startFill=1;endFill=1;sourcePerimeterSpacing=3;targetPerimeterSpacing=3;',
  _width: 48,
  _height: 48,
}

export function ConnectorCircleArrow(props: DiagramNodeProps) {
  return <Dependency {...CONNECTOR_CIRCLE_ARROW} {...props} />
}
