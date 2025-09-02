import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EMAIL_APPROVED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.email_approved;',
  },
  _original_width: 56,
  _original_height: 46,
}

export function EmailApproved(props: DiagramNodeProps) {
  return (
    <Shape
      {...EMAIL_APPROVED}
      {...props}
      _style={extendStyle(EMAIL_APPROVED, props)}
    />
  )
}
