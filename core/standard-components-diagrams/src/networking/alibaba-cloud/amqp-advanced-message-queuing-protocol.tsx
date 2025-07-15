import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AMQP_ADVANCED_MESSAGE_QUEUING_PROTOCOL = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.amqp_advanced_message_queuing_protocol;',
  _width: 45.9,
  _height: 48,
}

export function AmqpAdvancedMessageQueuingProtocol(props: DiagramNodeProps) {
  return <Shape {...AMQP_ADVANCED_MESSAGE_QUEUING_PROTOCOL} {...props} />
}
