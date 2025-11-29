import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IP_COMMUNICATOR = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.ip_communicator;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 136,
  _height: 74,
}

export function IpCommunicator(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IP_COMMUNICATOR)} />
}
