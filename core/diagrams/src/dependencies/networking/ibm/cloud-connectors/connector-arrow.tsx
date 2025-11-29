import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONNECTOR_ARROW = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=block;strokeWidth=2;endFill=1;',
  },
}

export function ConnectorArrow(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, CONNECTOR_ARROW)} />
}
