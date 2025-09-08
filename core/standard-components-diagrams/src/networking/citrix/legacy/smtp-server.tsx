import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SMTP_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.smtp_server;',
  },
  _original_width: 76,
  _original_height: 92,
}

export function SmtpServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...SMTP_SERVER}
      {...props}
      _style={extendStyle(SMTP_SERVER, props)}
    />
  )
}
