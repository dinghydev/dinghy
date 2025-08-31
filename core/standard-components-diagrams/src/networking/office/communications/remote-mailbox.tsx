import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REMOTE_MAILBOX = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.remote_mailbox;',
  _width: 59,
  _height: 57,
}

export function RemoteMailbox(props: DiagramNodeProps) {
  return (
    <Shape
      {...REMOTE_MAILBOX}
      {...props}
      _style={extendStyle(REMOTE_MAILBOX, props)}
    />
  )
}
