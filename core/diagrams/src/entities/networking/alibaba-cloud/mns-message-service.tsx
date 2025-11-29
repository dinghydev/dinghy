import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MNS_MESSAGE_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mns_message_service;',
  },
  _original_width: 39.900000000000006,
  _original_height: 39.900000000000006,
}

export function MnsMessageService(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MNS_MESSAGE_SERVICE)} />
}
