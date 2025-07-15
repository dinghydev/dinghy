import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DSI_DATA_SECURITY_INSURANCE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dsi_data_security_insurance;',
  _width: 43.5,
  _height: 51.3,
}

export function DsiDataSecurityInsurance(props: DiagramNodeProps) {
  return <Shape {...DSI_DATA_SECURITY_INSURANCE} {...props} />
}
