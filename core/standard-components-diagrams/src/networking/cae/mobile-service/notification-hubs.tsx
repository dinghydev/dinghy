import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NOTIFICATION_HUBS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Notification_Hubs.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function NotificationHubs(props: DiagramNodeProps) {
  return (
    <Shape
      {...NOTIFICATION_HUBS}
      {...props}
      _style={extendStyle(NOTIFICATION_HUBS, props)}
    />
  )
}
