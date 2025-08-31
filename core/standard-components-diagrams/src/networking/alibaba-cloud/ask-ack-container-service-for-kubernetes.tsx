import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ASK_ACK_CONTAINER_SERVICE_FOR_KUBERNETES = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ask_ack_container_service_for_kubernetes;',
  },
  _width: 44.7,
  _height: 51.3,
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
