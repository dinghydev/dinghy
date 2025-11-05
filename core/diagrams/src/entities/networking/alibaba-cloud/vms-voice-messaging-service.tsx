import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VMS_VOICE_MESSAGING_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.vms_voice_messaging_service;',
  },
  _original_width: 47.400000000000006,
  _original_height: 45.6,
}

export function VmsVoiceMessagingService(props: NodeProps) {
  return (
    <Shape
      {...VMS_VOICE_MESSAGING_SERVICE}
      {...props}
      _style={extendStyle(VMS_VOICE_MESSAGING_SERVICE, props)}
    />
  )
}
