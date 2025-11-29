import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISCONNECTED_MAILBOX = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.disconnected_mailbox;',
  },
  _original_width: 60,
  _original_height: 55,
}

export function DisconnectedMailbox(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DISCONNECTED_MAILBOX)} />
}
