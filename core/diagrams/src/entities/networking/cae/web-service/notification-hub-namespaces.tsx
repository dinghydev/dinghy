import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NOTIFICATION_HUB_NAMESPACES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Notification_Hubs.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
