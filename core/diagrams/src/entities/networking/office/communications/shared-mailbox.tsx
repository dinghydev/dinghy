import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHARED_MAILBOX = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.shared_mailbox;',
  },
  _original_width: 60,
  _original_height: 55,
}

export function SharedMailbox(props: NodeProps) {
  return (
    <Shape
      {...SHARED_MAILBOX}
      {...props}
      _style={extendStyle(SHARED_MAILBOX, props)}
    />
  )
}
