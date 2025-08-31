import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TUNNEL_CONNECTOR = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;shape=flexArrow;startArrow=none;endArrow=none;fillColor=#FFCCCC;strokeColor=none;',
  },
}

export function TunnelConnector(props: DiagramNodeProps) {
  return (
    <Dependency
      {...TUNNEL_CONNECTOR}
      {...props}
      _style={extendStyle(TUNNEL_CONNECTOR, props)}
    />
  )
}
