import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PORT_FLOW_NORTH = {
  _style: 'html=1;shape=mxgraph.sysml.port;sysMLPortType=flowN;',
  _width: 20,
  _height: 20,
}

export function PortFlowNorth(props: DiagramNodeProps) {
  return <Shape {...PORT_FLOW_NORTH} {...props} />
}
