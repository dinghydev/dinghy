import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOGICAL_CONNECTOR = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=none;strokeWidth=2;dashed=1;',
  },
}

export function LogicalConnector(props: NodeProps) {
  return (
    <Dependency
      {...LOGICAL_CONNECTOR}
      {...props}
      _style={extendStyle(LOGICAL_CONNECTOR, props)}
    />
  )
}
