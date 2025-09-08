import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PUBLIC_CONNECTOR_CIRCLE_ARROW = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=oval;endArrow=block;strokeWidth=2;startFill=1;endFill=1;strokeColor=#0F62F3;',
  },
}

export function PublicConnectorCircleArrow(props: DiagramNodeProps) {
  return (
    <Dependency
      {...PUBLIC_CONNECTOR_CIRCLE_ARROW}
      {...props}
      _style={extendStyle(PUBLIC_CONNECTOR_CIRCLE_ARROW, props)}
    />
  )
}
