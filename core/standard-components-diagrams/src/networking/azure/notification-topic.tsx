import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NOTIFICATION_TOPIC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.notification_topic;',
  },
  _width: 60,
  _height: 60,
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
