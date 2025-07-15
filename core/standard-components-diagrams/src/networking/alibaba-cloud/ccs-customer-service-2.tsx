import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CCS_CUSTOMER_SERVICE_2 = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ccs_customer_service_02;',
  _width: 52.2,
  _height: 55.2,
}

export function CcsCustomerService2(props: DiagramNodeProps) {
  return <Shape {...CCS_CUSTOMER_SERVICE_2} {...props} />
}
