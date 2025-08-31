import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER_MAILBOX = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.user_mailbox;',
  },
  _width: 59,
  _height: 55,
}

export function UserMailbox(props: DiagramNodeProps) {
  return (
    <Shape
      {...USER_MAILBOX}
      {...props}
      _style={extendStyle(USER_MAILBOX, props)}
    />
  )
}
