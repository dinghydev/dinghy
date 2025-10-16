import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REMOTE_MOVE_REQUEST = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.remote_move_request;',
  },
  _original_width: 60,
  _original_height: 57,
}

export function RemoteMoveRequest(props: DiagramNodeProps) {
  return (
    <Shape
      {...REMOTE_MOVE_REQUEST}
      {...props}
      _style={extendStyle(REMOTE_MOVE_REQUEST, props)}
    />
  )
}
