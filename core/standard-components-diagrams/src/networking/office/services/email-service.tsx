import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EMAIL_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.email_service;',
  },
  _original_width: 58,
  _original_height: 48,
}

export function EmailService(props: DiagramNodeProps) {
  return (
    <Shape
      {...EMAIL_SERVICE}
      {...props}
      _style={extendStyle(EMAIL_SERVICE, props)}
    />
  )
}
