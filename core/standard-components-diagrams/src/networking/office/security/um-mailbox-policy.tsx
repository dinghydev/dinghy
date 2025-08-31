import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UM_MAILBOX_POLICY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.um_mailbox_policy;',
  _width: 55,
  _height: 53,
}

export function UmMailboxPolicy(props: DiagramNodeProps) {
  return (
    <Shape
      {...UM_MAILBOX_POLICY}
      {...props}
      _style={extendStyle(UM_MAILBOX_POLICY, props)}
    />
  )
}
