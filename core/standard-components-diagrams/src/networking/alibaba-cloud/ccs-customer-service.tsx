import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CCS_CUSTOMER_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ccs_customer_service_01;',
  },
  _original_width: 54,
  _original_height: 54.6,
}

export function CcsCustomerService(props: DiagramNodeProps) {
  return (
    <Shape
      {...CCS_CUSTOMER_SERVICE}
      {...props}
      _style={extendStyle(CCS_CUSTOMER_SERVICE, props)}
    />
  )
}
