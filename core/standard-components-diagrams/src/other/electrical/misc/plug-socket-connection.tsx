import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLUG_SOCKET_CONNECTION = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.plug_socket_connection',
  },
  _width: 20,
  _height: 20,
}

export function PlugSocketConnection(props: DiagramNodeProps) {
  return (
    <Shape
      {...PLUG_SOCKET_CONNECTION}
      {...props}
      _style={extendStyle(PLUG_SOCKET_CONNECTION, props)}
    />
  )
}
