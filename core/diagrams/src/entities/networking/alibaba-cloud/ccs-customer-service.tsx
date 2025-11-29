import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CCS_CUSTOMER_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ccs_customer_service_01;',
  },
  _original_width: 54,
  _original_height: 54.6,
}

export function CcsCustomerService(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CCS_CUSTOMER_SERVICE)} />
}
