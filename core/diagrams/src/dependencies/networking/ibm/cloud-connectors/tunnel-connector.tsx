import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TUNNEL_CONNECTOR = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;shape=flexArrow;startArrow=none;endArrow=none;fillColor=#FFCCCC;strokeColor=none;',
  },
}

export function TunnelConnector(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, TUNNEL_CONNECTOR)} />
}
