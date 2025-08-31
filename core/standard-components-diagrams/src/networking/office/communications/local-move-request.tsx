import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCAL_MOVE_REQUEST = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.local_move_request;',
  _width: 60,
  _height: 60,
}

export function LocalMoveRequest(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOCAL_MOVE_REQUEST}
      {...props}
      _style={extendStyle(LOCAL_MOVE_REQUEST, props)}
    />
  )
}
