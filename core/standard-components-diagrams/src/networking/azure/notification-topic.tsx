import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NOTIFICATION_TOPIC = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.notification_topic;',
  _width: 50,
  _height: 50,
}

export function NotificationTopic(props: DiagramNodeProps) {
  return <Shape {...NOTIFICATION_TOPIC} {...props} />
}
