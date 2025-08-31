import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHARED_MAILBOX = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.shared_mailbox;',
  },
  _width: 60,
  _height: 55,
}

export function SharedMailbox(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHARED_MAILBOX}
      {...props}
      _style={extendStyle(SHARED_MAILBOX, props)}
    />
  )
}
