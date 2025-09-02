import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SMTP_CONNECTOR = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.smtp_connector;',
  },
  _original_width: 47,
  _original_height: 49,
}

export function SmtpConnector(props: DiagramNodeProps) {
  return (
    <Shape
      {...SMTP_CONNECTOR}
      {...props}
      _style={extendStyle(SMTP_CONNECTOR, props)}
    />
  )
}
