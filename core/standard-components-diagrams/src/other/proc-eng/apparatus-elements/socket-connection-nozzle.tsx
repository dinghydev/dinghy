import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOCKET_CONNECTION_NOZZLE = {
  _style: {
    entity:
      'shape=mxgraph.pid.apparatus_elements.socket,_connection_nozzle;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 30,
  _original_height: 40,
}

export function SocketConnectionNozzle(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOCKET_CONNECTION_NOZZLE}
      {...props}
      _style={extendStyle(SOCKET_CONNECTION_NOZZLE, props)}
    />
  )
}
