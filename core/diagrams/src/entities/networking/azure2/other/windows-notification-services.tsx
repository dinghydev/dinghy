import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WINDOWS_NOTIFICATION_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Windows_Notification_Services.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function WindowsNotificationServices(props: NodeProps) {
  return (
    <Shape
      {...WINDOWS_NOTIFICATION_SERVICES}
      {...props}
      _style={extendStyle(WINDOWS_NOTIFICATION_SERVICES, props)}
    />
  )
}
