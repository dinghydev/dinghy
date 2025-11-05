import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SMS_SHORT_MESSAGE_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sms_short_message_service;',
  },
  _original_width: 49.8,
  _original_height: 45.6,
}

export function SmsShortMessageService(props: NodeProps) {
  return (
    <Shape
      {...SMS_SHORT_MESSAGE_SERVICE}
      {...props}
      _style={extendStyle(SMS_SHORT_MESSAGE_SERVICE, props)}
    />
  )
}
