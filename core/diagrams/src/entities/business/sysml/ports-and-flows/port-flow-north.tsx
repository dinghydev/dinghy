import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PORT_FLOW_NORTH = {
  _style: {
    entity: 'html=1;shape=mxgraph.sysml.port;sysMLPortType=flowN;',
  },
  _original_width: 20,
  _original_height: 20,
}

export function PortFlowNorth(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PORT_FLOW_NORTH)} />
}
