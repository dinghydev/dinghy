import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UM_ENABLED_MAILBOX = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.um_enabled_mailbox;',
  },
  _original_width: 59,
  _original_height: 57,
}

export function UmEnabledMailbox(props: DiagramNodeProps) {
  return (
    <Shape
      {...UM_ENABLED_MAILBOX}
      {...props}
      _style={extendStyle(UM_ENABLED_MAILBOX, props)}
    />
  )
}
