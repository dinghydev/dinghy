import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NOTIFICATION_HUB_NAMESPACES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/web/Notification_Hub_Namespaces.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 56.00000000000001,
}

export function NotificationHubNamespaces(props: NodeProps) {
  return (
    <Shape
      {...NOTIFICATION_HUB_NAMESPACES}
      {...props}
      _style={extendStyle(NOTIFICATION_HUB_NAMESPACES, props)}
    />
  )
}
