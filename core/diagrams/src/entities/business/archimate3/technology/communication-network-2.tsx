import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMUNICATION_NETWORK_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.network;',
  },
  _original_width: 65,
  _original_height: 50,
}

export function CommunicationNetwork2(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, COMMUNICATION_NETWORK_2)} />
  )
}
