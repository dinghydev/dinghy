import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OUTBOUND_CONNECTION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/blockchain/Outbound_Connection.svg;strokeColor=none;',
  },
  _original_width: 71,
  _original_height: 64,
}

export function OutboundConnection(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OUTBOUND_CONNECTION)} />
}
