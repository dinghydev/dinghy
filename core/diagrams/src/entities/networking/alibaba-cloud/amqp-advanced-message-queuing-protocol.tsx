import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AMQP_ADVANCED_MESSAGE_QUEUING_PROTOCOL = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.amqp_advanced_message_queuing_protocol;',
  },
  _original_width: 45.9,
  _original_height: 48,
}

export function AmqpAdvancedMessageQueuingProtocol(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, AMQP_ADVANCED_MESSAGE_QUEUING_PROTOCOL)}
    />
  )
}
