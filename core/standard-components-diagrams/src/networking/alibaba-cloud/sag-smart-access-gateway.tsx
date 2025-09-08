import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SAG_SMART_ACCESS_GATEWAY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sag_smart_access_gateway_01;',
  },
  _original_width: 47.400000000000006,
  _original_height: 37.5,
}

export function SagSmartAccessGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAG_SMART_ACCESS_GATEWAY}
      {...props}
      _style={extendStyle(SAG_SMART_ACCESS_GATEWAY, props)}
    />
  )
}
