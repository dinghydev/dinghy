import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAILBOX = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.mailbox;',
  },
  _original_width: 53,
  _original_height: 49,
}

export function Mailbox(props: DiagramNodeProps) {
  return <Shape {...MAILBOX} {...props} _style={extendStyle(MAILBOX, props)} />
}
