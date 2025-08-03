import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NOTIFICATION_HUBS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/app_services/Notification_Hubs.svg;strokeColor=none;',
  _width: 67,
  _height: 56.00000000000001,
}

export function NotificationHubs(props: DiagramNodeProps) {
  return <Shape {...NOTIFICATION_HUBS} {...props} />
}
