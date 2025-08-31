import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAIL_SERVER = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.mail_server;',
  },
  _width: 105,
  _height: 105,
}

export function MailServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...MAIL_SERVER}
      {...props}
      _style={extendStyle(MAIL_SERVER, props)}
    />
  )
}
