import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAG_SMART_ACCESS_GATEWAY_2 = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sag_smart_access_gateway_02;',
  },
  _original_width: 50.099999999999994,
  _original_height: 41.4,
}

export function SagSmartAccessGateway2(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SAG_SMART_ACCESS_GATEWAY_2)} />
  )
}
