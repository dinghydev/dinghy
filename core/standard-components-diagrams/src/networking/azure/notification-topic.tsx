import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NOTIFICATION_TOPIC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.notification_topic;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function NotificationTopic(props: DiagramNodeProps) {
  return (
    <Shape
      {...NOTIFICATION_TOPIC}
      {...props}
      _style={extendStyle(NOTIFICATION_TOPIC, props)}
    />
  )
}
