import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EMAIL_REJECTED = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.email_rejected;',
  _width: 55,
  _height: 45,
}

export function EmailRejected(props: DiagramNodeProps) {
  return <Shape {...EMAIL_REJECTED} {...props} />
}
