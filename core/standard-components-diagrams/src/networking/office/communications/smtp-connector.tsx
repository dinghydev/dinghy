import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SMTP_CONNECTOR = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.smtp_connector;',
  _width: 47,
  _height: 49,
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
