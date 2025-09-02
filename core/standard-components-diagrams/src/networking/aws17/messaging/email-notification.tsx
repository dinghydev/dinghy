import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EMAIL_NOTIFICATION = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.email_notification;fillColor=#D9A741;gradientColor=none;',
  },
  _original_width: 100.5,
  _original_height: 63,
}

export function EmailNotification(props: DiagramNodeProps) {
  return (
    <Shape
      {...EMAIL_NOTIFICATION}
      {...props}
      _style={extendStyle(EMAIL_NOTIFICATION, props)}
    />
  )
}
