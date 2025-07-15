import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PUSH_NOTIFICATION_SERVICE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.push_notification_service;',
  _width: 50,
  _height: 58,
}

export function PushNotificationService(props: DiagramNodeProps) {
  return <Shape {...PUSH_NOTIFICATION_SERVICE} {...props} />
}
