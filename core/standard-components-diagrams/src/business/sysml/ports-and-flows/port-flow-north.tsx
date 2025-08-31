import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PORT_FLOW_NORTH = {
  _style: {
    entity: 'html=1;shape=mxgraph.sysml.port;sysMLPortType=flowN;',
  },
  _width: 20,
  _height: 20,
}

export function PortFlowNorth(props: DiagramNodeProps) {
  return (
    <Shape
      {...PORT_FLOW_NORTH}
      {...props}
      _style={extendStyle(PORT_FLOW_NORTH, props)}
    />
  )
}
