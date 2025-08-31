import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONNECTOR_CIRCLE_ARROW = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=oval;endArrow=block;strokeWidth=2;startFill=1;endFill=1;sourcePerimeterSpacing=3;targetPerimeterSpacing=3;',
  },
}

export function ConnectorCircleArrow(props: DiagramNodeProps) {
  return (
    <Dependency
      {...CONNECTOR_CIRCLE_ARROW}
      {...props}
      _style={extendStyle(CONNECTOR_CIRCLE_ARROW, props)}
    />
  )
}
