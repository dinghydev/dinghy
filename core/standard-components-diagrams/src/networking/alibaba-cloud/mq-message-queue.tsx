import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MQ_MESSAGE_QUEUE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mq_message_queue;',
  },
  _width: 45,
  _height: 49.8,
}

export function MqMessageQueue(props: DiagramNodeProps) {
  return (
    <Shape
      {...MQ_MESSAGE_QUEUE}
      {...props}
      _style={extendStyle(MQ_MESSAGE_QUEUE, props)}
    />
  )
}
