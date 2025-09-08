import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ASK_ACK_CONTAINER_SERVICE_FOR_KUBERNETES = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ask_ack_container_service_for_kubernetes;',
  },
  _original_width: 44.7,
  _original_height: 51.3,
}

export function AskAckContainerServiceForKubernetes(props: DiagramNodeProps) {
  return (
    <Shape
      {...ASK_ACK_CONTAINER_SERVICE_FOR_KUBERNETES}
      {...props}
      _style={extendStyle(ASK_ACK_CONTAINER_SERVICE_FOR_KUBERNETES, props)}
    />
  )
}
