import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MNS_MESSAGE_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mns_message_service;',
  },
  _width: 39.900000000000006,
  _height: 39.900000000000006,
}

export function MnsMessageService(props: DiagramNodeProps) {
  return (
    <Shape
      {...MNS_MESSAGE_SERVICE}
      {...props}
      _style={extendStyle(MNS_MESSAGE_SERVICE, props)}
    />
  )
}
