import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NOTIFICATION_HUBS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Notification_Hubs.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 56.00000000000001,
}

export function NotificationHubs(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NOTIFICATION_HUBS)} />
}
