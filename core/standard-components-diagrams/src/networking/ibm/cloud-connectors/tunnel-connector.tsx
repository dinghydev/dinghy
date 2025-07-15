import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TUNNEL_CONNECTOR = {
  _style:
    'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;shape=flexArrow;startArrow=none;endArrow=none;fillColor=#FFCCCC;strokeColor=none;',
  _width: 48,
  _height: 48,
}

export function TunnelConnector(props: DiagramNodeProps) {
  return <Dependency {...TUNNEL_CONNECTOR} {...props} />
}
