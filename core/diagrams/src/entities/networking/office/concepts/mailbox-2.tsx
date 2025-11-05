import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAILBOX_2 = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.mailbox2;',
  },
  _original_width: 53,
  _original_height: 49,
}

export function Mailbox2(props: NodeProps) {
  return (
    <Shape {...MAILBOX_2} {...props} _style={extendStyle(MAILBOX_2, props)} />
  )
}
