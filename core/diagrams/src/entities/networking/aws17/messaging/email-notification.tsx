import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EMAIL_NOTIFICATION = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.email_notification;fillColor=#D9A741;gradientColor=none;',
  },
  _width: 100.5,
  _height: 63,
}

export function EmailNotification(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EMAIL_NOTIFICATION)} />
}
