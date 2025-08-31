import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HTTP_NOTIFICATION = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.http_notification;fillColor=#D9A741;gradientColor=none;',
  },
  _width: 100.5,
  _height: 63,
}

export function HttpNotification(props: DiagramNodeProps) {
  return (
    <Shape
      {...HTTP_NOTIFICATION}
      {...props}
      _style={extendStyle(HTTP_NOTIFICATION, props)}
    />
  )
}
