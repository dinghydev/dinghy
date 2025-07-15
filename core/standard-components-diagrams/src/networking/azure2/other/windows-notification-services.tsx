import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WINDOWS_NOTIFICATION_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Windows_Notification_Services.svg;',
  _width: 68,
  _height: 68,
}

export function WindowsNotificationServices(props: DiagramNodeProps) {
  return <Shape {...WINDOWS_NOTIFICATION_SERVICES} {...props} />
}
