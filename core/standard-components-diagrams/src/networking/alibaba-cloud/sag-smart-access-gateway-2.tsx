import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SAG_SMART_ACCESS_GATEWAY_2 = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sag_smart_access_gateway_02;',
  _width: 50.099999999999994,
  _height: 41.4,
}

export function SagSmartAccessGateway2(props: DiagramNodeProps) {
  return <Shape {...SAG_SMART_ACCESS_GATEWAY_2} {...props} />
}
