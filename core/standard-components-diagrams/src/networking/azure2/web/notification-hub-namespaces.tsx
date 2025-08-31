import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NOTIFICATION_HUB_NAMESPACES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/web/Notification_Hub_Namespaces.svg;strokeColor=none;',
  },
  _width: 67,
  _height: 56.00000000000001,
}

export function NotificationHubNamespaces(props: DiagramNodeProps) {
  return (
    <Shape
      {...NOTIFICATION_HUB_NAMESPACES}
      {...props}
      _style={extendStyle(NOTIFICATION_HUB_NAMESPACES, props)}
    />
  )
}
