import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRIVATE_CONNECTOR_CIRCLE_ARROW = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=oval;endArrow=block;strokeWidth=2;startFill=1;endFill=1;strokeColor=#198038;',
  },
}

export function PrivateConnectorCircleArrow(props: NodeProps) {
  return (
    <Dependency
      {...PRIVATE_CONNECTOR_CIRCLE_ARROW}
      {...props}
      _style={extendStyle(PRIVATE_CONNECTOR_CIRCLE_ARROW, props)}
    />
  )
}
