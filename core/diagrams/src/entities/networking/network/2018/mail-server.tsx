import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAIL_SERVER = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.mail_server;',
  },
  _original_width: 105,
  _original_height: 105,
}

export function MailServer(props: NodeProps) {
  return (
    <Shape
      {...MAIL_SERVER}
      {...props}
      _style={extendStyle(MAIL_SERVER, props)}
    />
  )
}
