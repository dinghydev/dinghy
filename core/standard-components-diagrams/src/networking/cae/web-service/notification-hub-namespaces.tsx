import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NOTIFICATION_HUB_NAMESPACES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Notification_Hubs.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
