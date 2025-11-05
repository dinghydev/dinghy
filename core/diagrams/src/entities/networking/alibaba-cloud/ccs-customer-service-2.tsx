import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CCS_CUSTOMER_SERVICE_2 = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ccs_customer_service_02;',
  },
  _original_width: 52.2,
  _original_height: 55.2,
}

export function CcsCustomerService2(props: NodeProps) {
  return (
    <Shape
      {...CCS_CUSTOMER_SERVICE_2}
      {...props}
      _style={extendStyle(CCS_CUSTOMER_SERVICE_2, props)}
    />
  )
}
