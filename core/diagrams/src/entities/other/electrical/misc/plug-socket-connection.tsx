import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PLUG_SOCKET_CONNECTION = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.plug_socket_connection',
  },
  _original_width: 20,
  _original_height: 20,
}

export function PlugSocketConnection(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, PLUG_SOCKET_CONNECTION)} />
  )
}
