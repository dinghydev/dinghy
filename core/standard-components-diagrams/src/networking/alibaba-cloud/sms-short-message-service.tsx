import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SMS_SHORT_MESSAGE_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sms_short_message_service;',
  _width: 49.8,
  _height: 45.6,
}

export function SmsShortMessageService(props: DiagramNodeProps) {
  return <Shape {...SMS_SHORT_MESSAGE_SERVICE} {...props} />
}
