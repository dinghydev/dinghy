import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOGICAL_CONNECTOR_ARROW = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=block;endFill=1;strokeWidth=2;dashed=1;',
  },
}

export function LogicalConnectorArrow(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, LOGICAL_CONNECTOR_ARROW)}
    />
  )
}
