import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NOTIFICATION_HUBS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Notification_Hubs.svg;',
  _width: 50,
  _height: 50,
}

export function NotificationHubs(props: DiagramNodeProps) {
  return <Shape {...NOTIFICATION_HUBS} {...props} />
}
