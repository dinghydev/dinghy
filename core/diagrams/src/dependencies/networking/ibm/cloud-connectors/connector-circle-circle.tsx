import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONNECTOR_CIRCLE_CIRCLE = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=oval;endArrow=oval;strokeWidth=2;startFill=1;endFill=1;sourcePerimeterSpacing=3;targetPerimeterSpacing=3;',
  },
}

export function ConnectorCircleCircle(props: DiagramNodeProps) {
  return (
    <Dependency
      {...CONNECTOR_CIRCLE_CIRCLE}
      {...props}
      _style={extendStyle(CONNECTOR_CIRCLE_CIRCLE, props)}
    />
  )
}
